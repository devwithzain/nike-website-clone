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

export type TbillboardProps = {
   id: string;
   label: string;
   imageUrl: string;
};

export type TcategoryProps = {
   id: string;
   label: string;
   billboard: TbillboardProps;
};