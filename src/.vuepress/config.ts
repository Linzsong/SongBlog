import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/SongBlog/",

  lang: "zh-CN",
  title: "Song",
  description: "Cap的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
