// class="
export default {
  backdrop: `fixed inset-0 z-40 bg-black bg-opacity-50 cursor-pointer`,
  base: `h-screen overflow-hidden bg-white rounded-none flex flex-col cursor-auto dark:bg-gray-800`,
  size: {
    sm: `max-w-xs`,
    base: `max-w-sm`,
    lg: `max-w-md`,
    full: `w-screen max-w-screen my-0`,
  },
  position: {
    right: {
      base: `ml-auto`,
      transition: `origin-right translate-x-1/2`,
    },
    left: {
      base: `mr-auto`,
      transition: `origin-left -translate-x-1/2`,
    },
  },
  header: `flex justify-between items-center px-4 py-3 text-lg font-semibold border-b border-gray-200 text-gray-700 dark:text-gray-300`,
  body: `p-4 mb-2 text-sm text-gray-700 dark:text-gray-400 relative flex-auto overflow-y-auto`,
  footer: `flex flex-col items-center justify-end px-6 py-3 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-200 dark:bg-gray-800`,
}
// "
