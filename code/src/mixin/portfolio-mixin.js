export default {
  data() {
    return {
      portfolios: [
        {
          id: 1,
          img: require(`@/assets/images/portfolio/tanganica.png`),
          title: "Tanganica - WEB",
          project: "Webová stránka",
          client: "TGNCA  s. r. o",
          language: "HTML, Tailwind CSS, Javascript, Vue.js",
          preview: "https://www.tanganica.com/",
          previewLink: "https://www.tanganica.com/",
        },
        {
          id: 2,
          img: require(`@/assets/images/portfolio/truwork.png`),
          title: "Truwork - WEB",
          project: "Webová stránka",
          client: "Truwork  s. r. o",
          language: "HTML, Tailwind CSS, Javascript, Vue.js",
          preview: "https://truwork.cz/",
          previewLink: "https://truwork.cz/",
        },
        {
          id: 3,
          img: require(`@/assets/images/portfolio/app.tanganica.png`),
          title: "App Tanganica - WEB",
          project: "Webová aplikace",
          client: "TGNCA  s. r. o",
          language: "HTML, Tailwind CSS, Javascript, Vue.js",
          preview: "https://app.tanganica.com/",
          previewLink: "https://app.tanganica.com/",
        },
      ],
    };
  },
};
