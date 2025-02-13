export interface StackEntry extends BaseEntry {
  dynamic: BaseEntry[];
  sticky: BaseEntry[];
}

// ----------------- COMMON TYPES -----------------

export interface PublishDetails {
  time: string;
  user: string;
  environment: string;
  locale: string;
}

export interface BaseEntry {
  _content_type_uid: string;
  uid: string;
  _version: number;
  locale: string;
  ACL: Record<string, any>;
  _in_progress: boolean;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  tags: any[];
  publish_details: PublishDetails;
}

export interface FileData {
  uid: string;
  _version: number;
  title: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  content_type: string;
  file_size: string;
  filename: string;
  ACL: Record<string, any>;
  parent_uid: string | null;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails;
  url: string;
}

export interface ImageData {
  file: FileData;
  alt: string;
}

export interface TextStyle {
  tag?: string;
  color: string;
  size?: string;
  _metadata: {
    uid: string;
  };
}

// ----------------- HERO -----------------

export interface Button {
  label: string;
  _metadata: {
    uid: string;
  };
  variant: string;
  action: string;
  link: {
    title: string;
    href: string;
  };
  modal: Modal[]; // You may further type this if the modal structure is known
}

export interface CTA {
  button: Button;
}

export interface GroupTitle {
  title: string;
  style: TextStyle[];
}

export interface HeroGroupItem {
  title: GroupTitle;
  _metadata: {
    uid: string;
  };
  description: Array<{
    content: string;
    _metadata: {
      uid: string;
    };
    style: TextStyle[];
  }>;
}

export interface Modal extends BaseEntry {
  content: string;
  title: string;
  title_modal: string;
}

export interface Info {
  action: string;
  has_info: boolean;
  label: string;
  link: {
    title: string;
    href: string;
  };
  modal: Modal[];
}

export interface Price {
  info: string;
  label: string;
  line_through: boolean;
  value: number;
  variant?: string;
}

export interface Hero extends BaseEntry {
  badge: string;
  ctas: CTA[];
  group: HeroGroupItem[];
  info: Info;
  price: Price;
  title: string;
}

// ----------------- SEPARATOR -----------------

export interface Separator extends BaseEntry {
  alt: string;
  image_desktop: FileData;
  image_mobile: FileData;
  title: string;
}

// ----------------- HEADING EDITORIAL -----------------

export interface HeadingEditorial extends BaseEntry {
  group: {
    title: {
      title: string;
      style: TextStyle[];
    };
  };
  text: {
    content: string;
    style: TextStyle[];
  };
  title: string;
}

// ----------------- CAROUSEL -----------------

export interface CarouselCardThumb {
  title: string;
  _metadata: {
    uid: string;
  };
  image: ImageData;
  thumb: ImageData;
  description: string;
}

export interface CarouselListEntry {
  card_thumb: CarouselCardThumb;
}

export interface Carousel extends BaseEntry {
  list: CarouselListEntry[];
  title: string;
  title_slider: string;
  type: string;
}

// ----------------- BANNER DISCOUNT -----------------

export interface BannerDiscountCompare {
  from: Price;
  to: Price;
}

export interface BannerDiscount extends BaseEntry {
  compare: BannerDiscountCompare;
  title: string;
}

// ----------------- CARD LIST -----------------

export interface CardOffer {
  title: string;
  _metadata: {
    uid: string;
  };
  image: ImageData;
  thumb_image: ImageData;
  description: string;
}

export interface CardListEntry {
  card_offer: CardOffer;
}

export interface CardList extends BaseEntry {
  list: CardListEntry[];
  title: string;
}

// ----------------- ACCORDION GROUP -----------------

export interface AccordionItem {
  title: string;
  description: string;
  _metadata: {
    uid: string;
  };
}

export interface AccordionGroupEntry {
  item: AccordionItem;
}

export interface AccordionGroup extends BaseEntry {
  title: string;
  list: AccordionGroupEntry[];
}


// ----------------- STICKY -----------------

export interface Sticky extends BaseEntry {
  ctas: CTA[];
  info: Info;
  price: Price;
  title: string;
  title_label: GroupTitle;
}


// ----------------- UNION TYPE (optional) -----------------

export type ContentEntry =
  | Hero
  | Carousel
  | HeadingEditorial
  | BannerDiscount
  | CardList
  | AccordionGroup
  | Separator;

