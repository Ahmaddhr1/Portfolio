export const fadeInLeftDelayed = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
      type: "spring",
    },
  },
};


export const fadeInRightDelayed = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay:3,
        duration: 2,
        type: "spring",
      },
    },
  };

  export const headingVariants = {
    initial: {
      y: -150,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
      },
    },
  };

  export const fadeInLeft = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
      },
    },
  };
  export const fadeInRight = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
      },
    },
  };

  export const parentVariant = {
    initial: {
      staggerChildren: 0.2,
    },
    animate: {
      transition: {
        delayChildren:0.5,
        staggerChildren: 0.3,
      },
    },
  };