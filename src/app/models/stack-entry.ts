export interface StackEntry extends BaseEntry {
  dynamic: BaseEntry[];
  sticky: BaseEntry[];
}


// Common fields for all entries
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
  publish_details: {
    time: string;
    user: string;
    environment: string;
    locale: string;
  };
}

// ----------------- HERO -----------------

// Button inside a CTA
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
  modal: any[]; // Adjust if modal structure is known
}

// Each CTA wrapper
export interface CTA {
  button: Button;
}

// Style for text inside groups
export interface TextStyle {
  tag?: string; // e.g. "h1" or "h2"
  color: string;
  size?: string;
  _metadata: {
    uid: string;
  };
}

// Group item for hero content
export interface HeroGroupItem {
  title: {
    title: string;
    style: TextStyle[];
  };
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

// Info modal inside hero
export interface Modal {
  _content_type_uid: string;
  uid: string;
  _version: number;
  locale: string;
  ACL: Record<string, any>;
  _in_progress: boolean;
  content: string;
  created_at: string;
  created_by: string;
  tags: any[];
  title: string;
  title_modal: string;
  updated_at: string;
  updated_by: string;
  publish_details: {
    time: string;
    user: string;
    environment: string;
    locale: string;
  };
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
  variant: string;
}

export interface Hero extends BaseEntry {
  badge: string;
  ctas: CTA[];
  group: HeroGroupItem[];
  info: Info;
  price: Price;
  title: string;
}

// ----------------- CAROUSEL -----------------

// File information used in images
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
  publish_details: {
    time: string;
    user: string;
    environment: string;
    locale: string;
  };
  url: string;
}

export interface ImageData {
  file: FileData;
  alt: string;
}

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

// ----------------- HEADING EDITORIAL -----------------

export interface HeadingGroup {
  title: {
    title: string;
    style: TextStyle[];
  };
}

export interface TextContent {
  content: string;
  style: TextStyle[];
}

export interface HeadingEditorial extends BaseEntry {
  group: HeadingGroup;
  text: TextContent;
  title: string;
}

// ----------------- BANNER DISCOUNT -----------------

export interface ComparePriceDetail {
  value: number;
  label: string;
  info: string;
  line_through: boolean;
}

export interface ComparePrice {
  from: ComparePriceDetail;
  to: ComparePriceDetail;
}

export interface BannerDiscount extends BaseEntry {
  compare: ComparePrice;
  title: string;
}

// ----------------- CARD LIST -----------------

export interface CardOffer {
  title: string;
  image: ImageData;
  thumb_image: ImageData;
  description: string;
  _metadata: {
    uid: string;
  };
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

// ----------------- UNION TYPE (optional) -----------------

export type ContentEntry =
  | Hero
  | Carousel
  | HeadingEditorial
  | BannerDiscount
  | CardList
  | AccordionGroup;

