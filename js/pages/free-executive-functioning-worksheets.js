// ============================================================
// FEATURED RESOURCES TABS
// ============================================================

const feTabs = document.querySelectorAll(".fe-tab");
const fePanels = document.querySelectorAll(".fe-tab-panel");

feTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        feTabs.forEach((t) => {
            t.setAttribute("aria-selected", "false");
            t.tabIndex = -1;
        });
        fePanels.forEach((panel) => {
            panel.hidden = true;
        });

        tab.setAttribute("aria-selected", "true");
        tab.tabIndex = 0;
        document.getElementById(tab.getAttribute("aria-controls")).hidden = false;
    });
});


// ============================================================
// BROWSE ALL RESOURCES — FILTERING
// ============================================================

const feSkillFilter = document.getElementById("feFilterSkill");
const feTypeFilter = document.getElementById("feFilterType");
const feAudienceFilter = document.getElementById("feFilterAudience");
const feResourceCards = document.querySelectorAll("#feResourceGrid .fe-card");
const feEmptyNote = document.getElementById("feEmptyNote");

function feApplyFilters() {

    const skill = feSkillFilter.value;
    const type = feTypeFilter.value;
    const audience = feAudienceFilter.value;

    let visibleCount = 0;

    feResourceCards.forEach((card) => {

        const skills = card.dataset.skills.split(" ");
        const types = card.dataset.type.split(" ");
        const audiences = card.dataset.audience.split(" ");

        const matchesSkill = !skill || skills.includes(skill);
        const matchesType = !type || types.includes(type);
        const matchesAudience = !audience || audiences.includes(audience);

        const visible = matchesSkill && matchesType && matchesAudience;

        card.hidden = !visible;

        if (visible) {
            visibleCount++;
        }

    });

    feEmptyNote.hidden = visibleCount !== 0;

}

[feSkillFilter, feTypeFilter, feAudienceFilter].forEach((select) => {
    select.addEventListener("change", feApplyFilters);
});
