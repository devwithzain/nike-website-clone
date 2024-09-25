export const navVariants = {
   initial: {
      y: "-100%", transition: { ease: "easeInOut", duration: 1 }
   },
   enter: { y: 0, transition: { ease: "easeInOut", duration: 1 } },
   hidden: { y: "-100%", transition: { ease: "easeInOut", duration: 0.5 } },
   vissible: { y: 0, transition: { ease: "easeInOut", duration: 0.5 }, }
};
