import Orders from "./components/Orders/Orders";

const routes = [
  {
    path: "/",
    exact: true,
    component: null,
    title: 'Home'
  },
  {
    path: "/orders",
    component: Orders,
    title: 'orders',
    exact: true
  },{
    path: "/parts",
    component: null,
    title: 'parts'
  },{
    path: "/reports",
    component: null,
    title: 'reports'
  },{
    path: "/contacts",
    component: null,
    title: 'contacts'
  },{
    path: "/vehicles",
    component: null,
    title: 'vehicles'
  },{
    path: "/settings",
    component: null,
    title: 'settings'
  },
];

export default routes;
