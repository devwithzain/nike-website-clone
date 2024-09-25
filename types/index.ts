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