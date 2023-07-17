export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          img: require(`@/assets/images/blog/blog-post-1.jpg`),
          title: "Budu muset vymyslet nějaký blog no",
          commentor: "Nějaký člověk",
          date: "21 April 2022",
          tag: `vue.js | javascript | html | css`,
          description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          description3:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          description4:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };
  },
};
