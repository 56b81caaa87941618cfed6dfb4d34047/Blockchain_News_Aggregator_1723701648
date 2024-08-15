/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723701800", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
            <div id="footer-container" class="max-w-screen-xl mx-auto">
                <hr id="footer-divider" class="my-6 border-white border-opacity-20">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 filter invert" alt="Landwind Logo" />
                            BlockchainInsight
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white text-opacity-80 hover:text-opacity-100 transition duration-300">
                        © 2023 BlockchainInsight. Empowering users with real-time blockchain discoveries.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
