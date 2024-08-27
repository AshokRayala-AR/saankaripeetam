export const NavListData = [
  { navLink: "HOME", route: "/" },
  { navLink: "ABOUT", route: "/aboutus" },
  { navLink: "EVENTS", route: "/events" },
  {
    navLink: "ACTIVITIES",
    route: "/activities",
    childNav: [
      { navLink: "Parihara Pooja", route: "/activities/parihara" },
      { navLink: "Adyatmikam", route: "/activities/adyatmikam" },
      { navLink: "Samaaja Seva", route: "/activities/samajaseva" },
    ],
  },
  { navLink: "PRODUCTS", route: "/products" },
  { navLink: "CONTACT US", route: "/contact" },
  { navLink: "JOIN US", route: "/joinus" },
  { navLink: "DONATE NOW", route: "/donate" },
];

