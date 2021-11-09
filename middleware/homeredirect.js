export default function ({ app }) {
  console.log("getUsertoken: ", app.store.getters.getUserToken);
  app.router.beforeResolve((to, from, next) => {
    if (to.name === "landing" && app.store.getters.getUserToken) {
      next("/home");
    }

    if (app.store.getters.getUserToken) {
      next();
    }
  });
}
