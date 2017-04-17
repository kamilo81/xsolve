let activeClass = "active";
export let menuItemsList = [
  {
    name: "users",
    activeClass: activeClass,
    url: "/users",
    icon: "users",
    subMenu: []

  },
  {
    name: "albums",
    activeClass: null,
    url: null,
    icon: "image",
    subMenu: [
      {
        name: "album 1",
        url: "/albums/1/",
        icon: "image",
        activeClass: activeClass
      },
      {
        name: "album 2",
        url: "/albums/2/",
        icon: "image",
        activeClass: activeClass
      }
    ]
  },
  {
    name: "stats",
    activeClass: activeClass,
    url: "/stats",
    icon: "bar-chart",
    subMenu: []

  }
];
