import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "导读", icon: "discover", link: "/intro/" },
  {
    text: "问题反馈",
    icon: "note",
    link: "https://github.com/yangfukai/test-csln/issues",
  },
]);
