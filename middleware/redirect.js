export default function ({ app }) {
  console.log("getUsertoken: ", app.store.getters.getUserToken);
  app.router.beforeResolve((to, from, next) => {
    if (to.name == "home" && !app.store.getters.getUserToken) {
      app.redirect("/");
    }
  });
}
