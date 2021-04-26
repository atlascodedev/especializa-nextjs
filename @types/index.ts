export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement | any> | null;
  hidden?: boolean;
}

export interface NavigableComponent {
  navigableComponent: JSX.Element | null;
}

export interface HefestoImageField {
  imageURL: string;
  imageDescription: string;
}

export interface TestimonialsType {
  testimonialPicture: HefestoImageField;

  testimonialText: string;
  uuid: string;
  testimonialName: string;
  testimonialLocation: string;
}

export interface LandingProps {
  testimonials: TestimonialsType[];
  blog: BlogPostType[];
  partners: PartnerType[];
  cards: CardProduct[];
}

export type PartnerType = {
  partnerLogo: HefestoImageField;
  partnerName: string;
  uuid: string;
};

export type BlogPostType = {
  featuredImage: HefestoImageField;
  blogActive: boolean;
  blogTitle: string;
  uuid: string;
  blogPost: string;
  slug: string;
  blogDescription: string;
};

export interface CardInstallment {
  id: string;
  installmentValue: number | string;
  installmentMonths: string | number;
}

export type ProductType = "Automóvel" | "Imóvel";

export interface CardProduct {
  cardType: ProductType;
  cardDestaque: boolean;
  administradora: string;
  cardEntrada: string | number;
  cardSituation: boolean;
  cardValor: number | string;
  cardExpire: string;
  cardInstallment: CardInstallment[];
  uuid: string;
}
