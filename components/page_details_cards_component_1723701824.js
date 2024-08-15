/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1723701824", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-gradient-to-br from-purple-600 to-pink-500 min-h-230px">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4 text-white">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm px-4">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
                <div class="font-medium text-white">Real-Time Updates</div>
                <div class="text-purple-100">Stay ahead with instant alerts on the latest blockchain developments, ensuring you're always in the know.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
                <div class="font-medium text-white" id="start-date-des-1">Comprehensive Coverage</div>
                <time class="text-purple-100" id="start-time-des-1">Explore a vast array of blockchain networks, projects, and cryptocurrencies all in one convenient platform.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
                <div class="font-medium text-white" id="end-date-des-1">Customizable Filters</div>
                <time class="text-purple-100" id="end-time-des-1">Tailor your information feed to your interests, whether you're tracking specific coins, technologies, or market trends.</time>
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

