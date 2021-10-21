export default function ({ store, redirect }) {
  if (!store.getters.getUserToken) {
    return redirect("/");
  }
}
