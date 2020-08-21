export const cx = (
  ...classes: (false | null | undefined | string)[]
): string => {
  return classes.filter(Boolean).join(' ')
}
