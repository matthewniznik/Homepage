var app = new Vue({
  el: '#app',
  data: {
    showHome: true,
    showAboutMe: false,
    showFaq: false,
    showGames: false
  },
  methods: {
    show: function (sectionName) {
      this.hideAll();
      this['show'+sectionName] = true;
    },
    hideAll: function (event) {
      this.showHome = false;
      this.showAboutMe = false;
      this.showFaq = false;
      this.showGames = false;
    }
  }
})
