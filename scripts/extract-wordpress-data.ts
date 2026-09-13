import * as fs from 'fs';
import * as path from 'path';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseStringAsync = promisify(parseString);

interface WordPressPage {
  id: number;
  title: string;
  slug: string;
  url: string;
  content: string;
  excerpt: string;
  author: string;
  published_date: string;
  modified_date: string;
  status: 'publish' | 'draft' | 'private';
  post_type: 'page' | 'post' | 'attachment';
  post_parent: number;
  menu_order: number;
  comments_open: boolean;
  ping_status: boolean;
  custom_meta: Record<string, any>;
}

interface WordPressExport {
  pages: WordPressPage[];
  attachments: WordPressPage[];
  authors: Array<{
    id: number;
    login: string;
    email: string;
    display_name: string;
  }>;
}

async function extractWordPressData(): Promise<WordPressExport> {
  const xmlPath = path.join(
    process.cwd(),
    'lifeskillsadvocate.WordPress.2026-09-13.xml'
  );

  console.log(`📂 Reading XML file from: ${xmlPath}`);

  if (!fs.existsSync(xmlPath)) {
    throw new Error(`XML file not found at: ${xmlPath}`);
  }

  const xmlContent = fs.readFileSync(xmlPath, 'utf-8');
  console.log(`✅ XML file loaded (${xmlContent.length} bytes)`);

  console.log('🔄 Parsing XML...');
  const data = (await parseStringAsync(xmlContent)) as any;

  const rss = data.rss;
  const channel = rss.channel[0];
  const items = channel.item || [];

  const pages: WordPressPage[] = [];
  const attachments: WordPressPage[] = [];
  const authors: WordPressExport['authors'] = [];

  // Extract authors
  if (channel['wp:author']) {
    console.log('👥 Extracting authors...');
    channel['wp:author'].forEach((author: any) => {
      authors.push({
        id: parseInt(author['wp:author_id'][0]),
        login: author['wp:author_login'][0],
        email: author['wp:author_email'][0],
        display_name: author['wp:author_display_name'][0],
      });
    });
    console.log(`   Found ${authors.length} author(s)`);
  }

  // Extract pages and attachments
  console.log('📄 Extracting pages and attachments...');
  items.forEach((item: any, index: number) => {
    const postType = item['wp:post_type']?.[0];

    // Only process pages and attachments
    if (postType !== 'page' && postType !== 'attachment') {
      return;
    }

    const page: WordPressPage = {
      id: parseInt(item['wp:post_id']?.[0]) || 0,
      title: item.title?.[0] || 'No Title',
      slug: item['wp:post_name']?.[0] || '',
      url: item.link?.[0] || '',
      content: item['content:encoded']?.[0] || '',
      excerpt: item['excerpt:encoded']?.[0] || '',
      author: item['dc:creator']?.[0] || '',
      published_date: item['wp:post_date']?.[0] || '',
      modified_date: item['wp:post_modified']?.[0] || '',
      status: (item['wp:status']?.[0] || 'draft') as any,
      post_type: postType as any,
      post_parent: parseInt(item['wp:post_parent']?.[0]) || 0,
      menu_order: parseInt(item['wp:menu_order']?.[0]) || 0,
      comments_open: item['wp:comment_status']?.[0] === 'open',
      ping_status: item['wp:ping_status']?.[0] === 'open',
      custom_meta: {},
    };

    // Extract custom metadata
    if (item['wp:postmeta']) {
      item['wp:postmeta'].forEach((meta: any) => {
        const key = meta['wp:meta_key'][0];
        const value = meta['wp:meta_value'][0];
        page.custom_meta[key] = value;
      });
    }

    if (postType === 'page') {
      pages.push(page);
    } else if (postType === 'attachment') {
      attachments.push(page);
    }

    if ((index + 1) % 20 === 0) {
      process.stdout.write(`   ${index + 1} items processed...\r`);
    }
  });

  console.log(`   ✅ ${pages.length} pages extracted`);
  console.log(`   ✅ ${attachments.length} attachments extracted`);

  // Sort by slug
  pages.sort((a, b) => a.slug.localeCompare(b.slug));
  attachments.sort((a, b) => a.slug.localeCompare(b.slug));

  return {
    pages,
    attachments,
    authors,
  };
}

async function saveExtractedData(data: WordPressExport): Promise<void> {
  const outputDir = path.join(process.cwd(), 'src/data/wordpress');

  console.log('\n📁 Creating output directory structure...');

  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const pagesDir = path.join(outputDir, 'pages');
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  // Save all pages
  console.log('💾 Saving all-pages.json...');
  fs.writeFileSync(
    path.join(outputDir, 'all-pages.json'),
    JSON.stringify(data.pages, null, 2),
    'utf-8'
  );

  // Save all attachments
  console.log('💾 Saving all-attachments.json...');
  fs.writeFileSync(
    path.join(outputDir, 'all-attachments.json'),
    JSON.stringify(data.attachments, null, 2),
    'utf-8'
  );

  // Save authors
  console.log('💾 Saving authors.json...');
  fs.writeFileSync(
    path.join(outputDir, 'authors.json'),
    JSON.stringify(data.authors, null, 2),
    'utf-8'
  );

  // Save index file with page metadata
  console.log('💾 Saving index.json...');
  fs.writeFileSync(
    path.join(outputDir, 'index.json'),
    JSON.stringify(
      {
        total_pages: data.pages.length,
        total_attachments: data.attachments.length,
        total_authors: data.authors.length,
        extracted_date: new Date().toISOString(),
        pages: data.pages.map((p) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          url: p.url,
          status: p.status,
          published_date: p.published_date,
          author: p.author,
        })),
      },
      null,
      2
    ),
    'utf-8'
  );

  // Save individual pages organized by slug
  console.log(`📝 Saving ${data.pages.length} individual page files...`);
  data.pages.forEach((page, index) => {
    fs.writeFileSync(
      path.join(pagesDir, `${page.slug}.json`),
      JSON.stringify(page, null, 2),
      'utf-8'
    );

    if ((index + 1) % 20 === 0) {
      process.stdout.write(`   ${index + 1}/${data.pages.length} pages saved...\r`);
    }
  });
  console.log(`   ✅ All pages saved\n`);

  console.log('✅ Data extraction complete!\n');
  console.log('📊 Summary:');
  console.log(`   📄 Pages: ${data.pages.length}`);
  console.log(`   🖼️  Attachments: ${data.attachments.length}`);
  console.log(`   👥 Authors: ${data.authors.length}`);
  console.log(`   📁 Output directory: ${outputDir}\n`);
  console.log('📂 Generated files:');
  console.log(`   ✅ ${outputDir}/all-pages.json`);
  console.log(`   ✅ ${outputDir}/all-attachments.json`);
  console.log(`   ✅ ${outputDir}/authors.json`);
  console.log(`   ✅ ${outputDir}/index.json`);
  console.log(`   ✅ ${outputDir}/pages/*.json (${data.pages.length} individual files)\n`);
}

// Run extraction
async function main() {
  try {
    console.log('🚀 Starting WordPress Export Extraction\n');
    console.log('=' .repeat(60));
    const data = await extractWordPressData();
    await saveExtractedData(data);
    console.log('=' .repeat(60));
    console.log('\n✨ Extraction successful! Ready for Next.js integration.\n');
  } catch (error) {
    console.error('\n❌ Error extracting data:', error);
    process.exit(1);
  }
}

main();
