const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "Typography", name:"Typography", component: () => import("pages/Typography.vue") },
      { path: "Flex", name:"Flex", component: () => import("pages/Flex.vue") },
      { path: "Dialog", name:"Dialog", component: () => import("pages/Dialogs.vue") },
      { path: "Forms", name:"Forms", component: () => import("pages/Forms.vue") },
     ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
