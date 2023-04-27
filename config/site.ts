import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "知识库",
  description: "Upload data, start asking question",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Credentials",
      href: "/credentials",
    },
  ],
  links: {
    twitter: "",
    github: "",
  },
}
