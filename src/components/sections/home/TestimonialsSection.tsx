'use client';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Our son was constantly overwhelmed by school, and we felt like we had to constantly monitor him. After coaching, he's much better at organizing his time and getting things done on his own. We no longer need to hover over his shoulder to ensure he stays on track.",
      author: 'Lisa',
      role: 'Parent of high school student',
    },
    {
      id: 2,
      quote:
        "Coaching has helped me so much this semester. I used to feel really lost about how to approach big assignments and exams, but now I finally feel like I have a plan and tools that work for me. I'm more productive, and I feel less anxious about deadlines.",
      author: 'Tyler',
      role: 'College Student',
    },
    {
      id: 3,
      quote:
        "Coaching has made a huge difference for me. I've seen progress in my self-awareness and compassion toward myself, especially in situations that are beyond my control. The support has been validating, and I feel more equipped to manage my challenges.",
      author: 'Jade',
      role: 'Adult Coaching Client',
    },
  ];

  return (
    <section>
      <div>
        <div>
          <h2>What Our Clients & Parents Are Saying</h2>
          <p>Real testimonials from real people</p>
        </div>

        <div>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div>
                <p>"{testimonial.quote}"</p>
                <div>
                  <p>{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
