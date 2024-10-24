export type TmegaMenuProps = {
   menuItems: {
      id: number;
      title: string;
      links: {
         id: number;
         title: string;
         href: string;
      }[];
   }[];
   onMouseEnter: () => void;
   onMouseLeave: () => void;
};

type Billboard = {
   id: string;
   label: string;
   imageUrl: string;
};

type Category = {
   id: string;
   name: string;
   billboard: Billboard;
};

type ProductCategory = {
   id: string;
   name: string;
   products: Product[];
   category: Category[];
};

type Image = {
   id: string;
   url: string;
};

type Subcategory = {
   id: string;
   name: string;
   imageUrl: string;
};

type Color = {
   id: string;
   name: string;
   value: string;
};

type ProductColor = {
   id: string;
   name: string;
   color: Color;
};

type Size = {
   id: string;
   name: string;
   value: string;
};

type ProductSize = {
   id: string;
   name: string;
   size: Size;
};

export type Product = {
   id: string;
   name: string;
   material: string;
   sale: string;
   rating: string;
   price: number;
   isFeatured: boolean;
   isArchived: boolean;
   images: Image[];
   subcategory: Subcategory;
   ProductColor: ProductColor[];
   ProductSize: ProductSize[];
   ProductCategory: ProductCategory[];
};

export type TcategoriesProps = {
   categories: Category[];
};

export type TsubCategoriesProps = {
   subcategories: Subcategory[];
};

export type TbillboardsProps = {
   billboards: Billboard[];
};

export type TproductProps = {
   products: Product[];
};

export type ThomeProps = {
   billboards: TbillboardsProps;
   subcategories: TsubCategoriesProps;
};

export type Query = {
   categoryId?: string;
   colorId?: string;
   categoryName?: string;
   sizeId?: string;
   isFeatured?: boolean;
   isArchived?: boolean;
   subcategoryId?: string;
   productCategory?: string;
};