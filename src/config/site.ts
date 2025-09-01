import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://paul.agentis.solutions",
  ogImage: USER.ogImage,
  description: USER.bio,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "paool";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/paool";

export const UTM_PARAMS = {
  utm_source: "paul.agentis.solutions",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
