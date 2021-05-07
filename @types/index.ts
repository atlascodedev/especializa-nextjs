export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement | any> | null;
  hidden?: boolean;
}

export interface CourseCard {
  title: string;
  imageURL: string;
  subTitle: string;
  to: string;
}

export interface NavigableComponent {
  navigableComponent: JSX.Element | null;
}

export interface HefestoImageField {
  imageURL: string;
  imageDescription: string;
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

interface HefestoCollection {
  uuid: string;
}

export interface ServiceCollection extends HefestoCollection {
  serviceName: string;
  servicePicture: {
    imageURL: string;
    imageDescription: string;
  };
  serviceContent: string;
  slug: string;
}

export interface CourseCollection extends HefestoCollection {
  slug: string;
  courseName: string;
  courseDuration: string;
  courseLevel: string;
  courseSyllabus: string[];
  courseDescription: string;
  courseArea: string;
  courseImage: {
    imageURL: string;
    imageDescription: string;
  };
}

export interface BlogCollection extends HefestoCollection {
  slug: string;
  blogTitle: string;
  blogDescription: string;
  featuredImage: {
    imageURL: string;
    imageDescription: string;
  };
  blogActive: boolean;
  blogPost: boolean;
}

export interface TestimonialCollection extends HefestoCollection {
  testimonialName: string;
  testimonialPicture: {
    imageURL: string;
    imageDescription: string;
  };
  testimonialText: string;
  testimonialCompany: string;
}

export interface PartnerCollection extends HefestoCollection {
  partnerName: string;
  partnerLogo: {
    imageURL: string;
    imageDescription: string;
  };
  partnerWebsite: string;
}
