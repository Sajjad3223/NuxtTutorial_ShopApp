export interface SettingsDto{
    logo: string
    title: string
    subTitle: string
    banners: Banner[]
    footerLinks: FooterLinkGroup[]
}

export interface Banner {
  image: string
  title: string
  url: string
}

export interface FooterLink {
  label: string
  url: string
}

export interface FooterLinkGroup {
  title: string
  links: FooterLink[]
}