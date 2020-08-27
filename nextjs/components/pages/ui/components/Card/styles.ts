export default {
  base: `min-w-0 overflow-hidden rounded-lg transition-shadow duration-150 ease-in inline-flex flex-col relative border border-solid text-base`,
  hov: 'hover:shadow focus:shadow',
  header: {
    base: `px-3 py-2 border-b flex justify-between items-center`,
    color: {
      default: `border-gray-200 text-gray-800`,
      success: `border-green-200 text-green-900`,
      danger: `border-red-200 text-red-900`,
      dark: `border-gray-800 text-gray-100`,
    },
    title: {
      base: `font-semibold text-base`,
      default: `text-gray-900`,
      success: `text-green-800`,
      danger: `text-red-800`,
      dark: `text-gray-100`,
    },
    subtitle: `text-gray-600 text-sm`,
  },
  body: {
    base: `px-3 py-2 flex-auto max-h-full`,
    loading: {
      base: `text-center text-sm flex justify-center items-center`,
      default: `text-purple-600`,
      success: `text-green-700`,
      danger: `text-red-700`,
      dark: `text-gray-100`,
    },
  },
  // className="
  footer: {
    base: `px-3 py-2 rounded-b flex items-center`,
    transparent: `!bg-transparent border-t`,
    loading: `opacity-50 pointer-events-none cursor-default`,
    color: {
      default: `bg-gray-200 border-gray-200`,
      success: `bg-green-200 border-green-200 text-green-900`,
      danger: `bg-red-200 border-red-200 text-red-900`,
      dark: `bg-gray-800 border-gray-800 text-gray-100`,
    },
  },
  color: {
    default: `bg-white border-gray-200 dark:bg-gray-800`,
    success: `bg-green-100 text-green-900 border-green-200`,
    danger: `bg-red-100 text-red-900 border-red-200`,
    dark: `bg-gray-900 text-gray-100 border-gray-800`,
  },
}
// "
