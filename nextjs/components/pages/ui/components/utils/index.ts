export const hasSizeClass = (className?: string) =>
  className?.includes(`w-`) && className?.includes(`h-`)
