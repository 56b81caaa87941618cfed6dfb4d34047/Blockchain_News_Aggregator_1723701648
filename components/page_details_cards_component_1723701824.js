/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1723701824", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium text-slate-200 text-slate-400">Real-Time Updates</div>
                <div class="text-slate-400">Stay ahead with instant alerts on the latest blockchain developments, ensuring you're always in the know.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="start-date-des-1 text-slate-200 text-slate-400">Comprehensive Coverage</div>
                <time class="text-slate-400" id="start-time-des-1">Explore a vast array of blockchain networks, projects, and cryptocurrencies all in one convenient platform.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="end-date-des-1 text-slate-200 text-slate-400">Customizable Filters</div>
                <time class="text-slate-400" id="end-time-des-1">Tailor your information feed to your interests, whether you're tracking specific coins, technologies, or market trends.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

