import firebase from "firebase/app";
import "firebase/auth";

export default function ({ store, redirect }) {
  console.log("store user token: ", firebase.auth().currentUser);
  if (store.getters.getUserToken) {
    return redirect("/home");
  }
}
