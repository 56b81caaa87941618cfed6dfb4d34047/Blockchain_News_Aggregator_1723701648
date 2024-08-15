Vue.component('faq_accordion_1723701758', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Everything you need to know about our blockchain information discovery app</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What is this blockchain information discovery app?",
          a: "Our app is a powerful tool designed to help users find and explore new blockchain information efficiently. It aggregates data from multiple sources to provide up-to-date insights on various blockchain networks, projects, and technologies."
        },
        {
          q: "How does the app work?",
          a: "The app uses advanced algorithms to scan and analyze blockchain data sources, including news outlets, social media, and on-chain activity. It then presents this information in an easy-to-understand format, allowing users to discover trending topics, new projects, and important developments in the blockchain space."
        },
        {
          q: "Is this app suitable for beginners?",
          a: "Absolutely! Our app is designed with both beginners and experienced users in mind. It offers intuitive navigation and explanations of complex concepts, making it easy for newcomers to learn about blockchain while also providing in-depth information for advanced users."
        },
        {
          q: "Can I customize the type of blockchain information I receive?",
          a: "Yes, you can! Our app allows you to set preferences for the types of blockchain information you're most interested in. Whether you're focused on specific cryptocurrencies, DeFi projects, or emerging blockchain technologies, you can tailor your feed to suit your needs."
        },
        {
          q: "How often is the information updated?",
          a: "Our app updates information in real-time, ensuring you always have access to the latest blockchain news and data. This includes live updates on price movements, breaking news, and significant on-chain events across various blockchain networks."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});