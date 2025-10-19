const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Pricing",
        path: "/pricing",
        newTab: false,
      },
    ]
  },
  {
    id: 33,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
