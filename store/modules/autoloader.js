/**
 * This file will import all modules inside this directroy and
 * create a new object to eject it in vuex.store
 */

const files = require.context(".", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  if (key === "./autoloader.js") return;
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

export default modules;
