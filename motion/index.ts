export const navVariants = {
   initial: {
      y: "-100%", transition: { ease: "linear", duration: 1 }
   },
   enter: { y: 0, transition: { ease: "linear", duration: 1 } },
   hidden: { y: "-100%", transition: { ease: "linear", duration: 0.5 } },
   vissible: { y: 0, transition: { ease: "linear", duration: 0.5 }, }
};
