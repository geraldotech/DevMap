import { log } from "./logger";
import Vue from "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";

log("Import works!");

const app = new Vue({
  el: "#app",
  data: { a: "VueJS 2.0" },
});
