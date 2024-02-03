export const variant = {
  hidden: { opacity: 0 },
  animate: (custom: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.25, ease: "easeInOut" },
  }),
};
