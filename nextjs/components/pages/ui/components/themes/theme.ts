const theme = {
  Button: {
    base: `inline-flex items-center justify-center leading-5 align-bottom transition-colors duration-150 ease-in transform scale-100 border cursor-pointer focus:outline-none dark:focus:shadow-outline-gray active:scale-95 overflow-hidden no-underline select-none`,
    disabled: `opacity-25 pointer-events-none cursor-default`,
    loading: `opacity-75 pointer-events-none cursor-default`,
    block: `w-full`,
    size: {
      xs: `py-0 px-2 text-xs rounded-md`,
      sm: `py-1 px-3 text-sm rounded-md`,
      base: `py-2 px-4 text-base font-medium rounded-lg`,
      lg: `py-3 px-5 text-lg rounded-lg`,
      xl: `py-4 px-6 text-xl rounded-lg`,
    },
    variant: {
      default: {
        primary: `text-white bg-purple-600 border-transparent active:shadow-outline-purple focus:bg-purple-700 hover:bg-purple-700`,
        secondary: `text-white bg-gray-600 border-gray-600 active:shadow-outline-gray focus:bg-gray-700 hover:bg-gray-700`,
        success: `text-white bg-green-600 border-green-600 active:shadow-outline-green focus:bg-green-700 hover:bg-green-700`,
        danger: `text-white bg-red-600 border-red-600 active:shadow-outline-red focus:bg-red-700 hover:bg-red-700`,
        warning: `text-white bg-yellow-500 border-yellow-500 active:shadow-outline-red focus:bg-yellow-600 hover:bg-yellow-600`,
        light: `text-gray-900 bg-gray-200 border-gray-200 active:shadow-outline-red focus:bg-gray-400 hover:bg-gray-400`,
        dark: `text-white bg-gray-900 border-gray-900 active:shadow-outline-red focus:bg-gray-600 hover:bg-gray-600`,
        link: `text-purple-800 border border-transparent dark:text-gray-400 active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-0`,
      },
      outline: {
        primary: `text-purple-700 bg-transparent border-current hover:text-white hover:bg-purple-700 hover:border-purple-700`,
        secondary: `text-gray-600 bg-transparent border-current hover:text-white hover:bg-gray-800 hover:border-gray-800`,
        success: `text-green-700 bg-transparent border-current hover:text-white hover:bg-green-700 hover:border-green-700`,
        danger: `text-red-700 bg-transparent border-current hover:text-white hover:bg-red-700 hover:border-red-700`,
        warning: `text-yellow-600 bg-transparent border-current hover:text-white hover:bg-yellow-600 hover:border-yellow-600`,
        link: `text-purple-800 bg-transparent border-transparent hover:border-gray-300`,
        light: `text-gray-600 bg-transparent border-current hover:text-gray-900 hover:bg-gray-400 hover:border-gray-400`,
        dark: `text-gray-900 bg-transparent border-current hover:text-white hover:bg-gray-900 hover:border-gray-900`,
      },
      light: {
        primary: `text-purple-700 bg-purple-200 border-purple-200 hover:bg-purple-300 hover:text-purple-700 hover:border-purple-300`,
        secondary: `text-gray-700 bg-gray-200 border-gray-200 hover:text-gray-900 hover:bg-gray-300 hover:border-gray-300`,
        success: `text-green-800 bg-green-200 border-green-200 hover:text-green-900 hover:bg-green-300 hover:border-green-300`,
        danger: `text-red-700 bg-red-200 border-red-200 hover:text-red-900 hover:bg-red-300 hover:border-red-300`,
        warning: `text-yellow-800 bg-yellow-200 border-yellow-200 hover:text-yellow-900 hover:bg-yellow-300 hover:border-yellow-300`,
        light: `text-purple-500 bg-transparent border-transparent hover:text-purple-700 hover:bg-gray-100 hover:border-gray-200`,
        dark: ``,
        link: ``,
      },
    },
    shape: {
      rounded: `rounded-full`,
      square: `rounded-none`,
    },
    // className="
    spinner: {
      size: {
        xs: `w-4 h-4`,
        sm: `w-4 h-4`,
        base: `w-5 h-5`,
        lg: `w-6 h-6`,
        xl: `w-6 h-6`,
      },
    },
    icon: {
      size: {
        xs: `!w-5 !h-5`,
        sm: `!w-6 !h-6`,
        base: `!w-7 !h-7`,
        lg: `!w-8 !h-8`,
        xl: `!w-9 !h-9`,
      },
      variant: {
        left: 'mr-2 -ml-1',
        right: 'ml-2 -mr-1',
      },
    },
  },
  ButtonIcon: {
    base: `inline-flex items-center justify-center leading-5 align-bottom transition-colors duration-150 ease-in transform scale-100 border cursor-pointer focus:outline-none dark:focus:shadow-outline-gray active:scale-95 overflow-hidden no-underline select-none`,
    disabled: `opacity-25 pointer-events-none cursor-default`,
    loading: `opacity-75 pointer-events-none cursor-default`,
    size: {
      xs: `p-0 rounded-sm`,
      sm: `p-1 rounded-md`,
      base: `p-2 rounded-lg`,
      lg: `p-3 rounded-lg`,
      xl: `p-4 rounded-lg`,
    },
    variant: {
      default: {
        primary: `text-white bg-purple-600 border-transparent active:shadow-outline-purple focus:bg-purple-700 hover:bg-purple-700`,
        secondary: `text-white bg-gray-600 border-gray-600 active:shadow-outline-gray focus:bg-gray-700 hover:bg-gray-700`,
        success: `text-white bg-green-600 border-green-600 active:shadow-outline-green focus:bg-green-700 hover:bg-green-700`,
        danger: `text-white bg-red-600 border-red-600 active:shadow-outline-red focus:bg-red-700 hover:bg-red-700`,
        warning: `text-white bg-yellow-500 border-yellow-500 active:shadow-outline-red focus:bg-yellow-600 hover:bg-yellow-600`,
        light: `text-gray-900 bg-gray-200 border-gray-200 active:shadow-outline-red focus:bg-gray-400 hover:bg-gray-400`,
        dark: `text-white bg-gray-900 border-gray-900 active:shadow-outline-red focus:bg-gray-600 hover:bg-gray-600`,
        link: `text-purple-800 border border-transparent dark:text-gray-400 active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-0`,
      },
      outline: {
        primary: `text-purple-700 bg-transparent border-current hover:text-white hover:bg-purple-700 hover:border-purple-700`,
        secondary: `text-gray-600 bg-transparent border-current hover:text-white hover:bg-gray-800 hover:border-gray-800`,
        success: `text-green-700 bg-transparent border-current hover:text-white hover:bg-green-700 hover:border-green-700`,
        danger: `text-red-700 bg-transparent border-current hover:text-white hover:bg-red-700 hover:border-red-700`,
        warning: `text-yellow-600 bg-transparent border-current hover:text-white hover:bg-yellow-600 hover:border-yellow-600`,
        link: `text-purple-800 bg-transparent border-transparent hover:border-gray-300`,
        light: `text-gray-600 bg-transparent border-current hover:text-gray-900 hover:bg-gray-400 hover:border-gray-400`,
        dark: `text-gray-900 bg-transparent border-current hover:text-white hover:bg-gray-900 hover:border-gray-900`,
      },
      light: {
        primary: `text-purple-700 bg-purple-200 border-purple-200 hover:bg-purple-300 hover:text-purple-700 hover:border-purple-300`,
        secondary: `text-gray-700 bg-gray-200 border-gray-200 hover:text-gray-900 hover:bg-gray-300 hover:border-gray-300`,
        success: `text-green-800 bg-green-200 border-green-200 hover:text-green-900 hover:bg-green-300 hover:border-green-300`,
        danger: `text-red-700 bg-red-200 border-red-200 hover:text-red-900 hover:bg-red-300 hover:border-red-300`,
        warning: `text-yellow-800 bg-yellow-200 border-yellow-200 hover:text-yellow-900 hover:bg-yellow-300 hover:border-yellow-300`,
        light: `text-purple-500 bg-transparent border-transparent hover:text-purple-700 hover:bg-gray-100 hover:border-gray-200`,
        dark: ``,
        link: ``,
      },
    },
    shape: {
      rounded: `rounded-full`,
      square: `rounded-none`,
    },
    spinner: {
      size: {
        xs: `w-4 h-4`,
        sm: `w-4 h-4`,
        base: `w-5 h-5`,
        lg: `w-6 h-6`,
        xl: `w-6 h-6`,
      },
    },
    // Icon size base on button
    icon: {
      size: {
        xs: `!h-4 !w-4`,
        sm: `!h-4 !w-4`,
        base: `!h-4 !w-4`,
        lg: `!h-6 !w-6`,
        xl: `!h-8 !w-8`,
      },
    },
  },
  Spinner: {
    base: `animate-spin `,
    size: {
      sm: `!w-4 !h-4`,
      base: `!w-6 !h-6`,
      lg: `!w-9 !h-9`,
    },
    // when has Loading text inside button `-ml-1 mr-3`
  },
  Icon: {
    size: {
      xs: `w-5 h-5`,
      sm: `w-6 h-6`,
      base: `w-7 h-7`,
      lg: `w-8 h-8`,
      xl: `w-9 h-9`,
    },
    color: {
      primary: ` text-purple-600`,
      secondary: ` text-gray-600`,
      success: ` text-green-600`,
      danger: ` text-red-600`,
      warning: ` text-yellow-500`,
      light: ` text-gray-200`,
      dark: ` text-gray-900`,
    },
  },
  Alert: {
    base:
      'font-medium relative overflow-hidden border-2 border-solid rounded-md duration-150 ease-in flex items-center justify-start',
    hasClose: `pr-12`,
    btnClose: `absolute top-0 bottom-0 right-0 flex items-center justify-center px-1`,
    description: `text-sm font-normal`,
    size: {
      sm: 'py-1 pl-2 pr-2 text-sm',
      base: 'py-2 pl-4 pr-4 text-base',
      lg: 'py-5 pl-5 pr-5 text-lg',
    },
    variant: {
      default: {
        primary: `bg-purple-200 border-purple-200 text-purple-800`,
        secondary: `bg-gray-200 border-gray-200 text-gray-800`,
        success: `bg-green-200 border-green-200 text-green-800`,
        danger: `bg-red-200 border-red-200 text-red-700`,
        warning: `bg-yellow-200 border-yellow-200 text-yellow-800`,
        light: `bg-gray-200 border-gray-200 text-gray-900`,
        dark: `bg-gray-900 border-gray-900 text-white`,
      },
      outline: {
        primary: `border-current text-purple-700 bg-transparent`,
        secondary: `border-current text-gray-700 bg-transparent`,
        success: `border-current text-green-700 bg-transparent`,
        danger: `border-current text-red-700 bg-transparent`,
        warning: `border-current text-yellow-700 bg-transparent`,
        light: `border-current text-gray-200 bg-transparent`,
        dark: `border-current text-gray-900 bg-transparent`,
      },
      solid: {
        primary: `bg-purple-700 border-purple-700 text-white`,
        secondary: `bg-primary border-primary text-white`,
        success: `bg-green-700 border-green-700 text-white`,
        danger: `bg-red-700 border-red-700 text-white`,
        warning: `bg-yellow-600 border-yellow-600 text-white`,
        light: `bg-gray-200 border-gray-200  text-white`,
        dark: `bg-gray-900 border-gray-900 text-white`,
      },
    },
    bordered: {
      top: `border border-solid border-t-4 border-r-0 border-b-0 border-l-0 !border-current rounded-none`,
      left: `border border-solid border-l-4 border-r-0 border-b-0 border-t-0 !border-current rounded-none`,
      right: `border border-solid border-r-4 border-l-0 border-b-0 border-t-0 !border-current rounded-none`,
      bottom: `border border-solid border-b-4 border-l-0 border-r-0 border-t-0 !border-current rounded-none`,
    },
    statusIcon: `!h-5 !w-5 mr-3`,
    // '.alert a': {
    //   underline: {},
    // },
    // '.prose .alert p': {
    //   'mt-0 mb-0': {},
    // },
    // '.prose .alert a': {
    //   color: 'inherit',
    // },
  },
  Avatar: {
    base: `relative rounded-full select-none text-center no-underline`,
    avatarIcon: `bg-purple-300 text-purple-600 `,
    size: {
      xs: `w-6 h-6`,
      sm: `w-8 h-8`,
      base: `h-10 w-10 `,
      lg: `w-20 h-20`,
      xl: `w-32 h-32`,
    },
    // '.avatar-xs': {
    //   '@apply h-6 w-6 !important': {},
    //   maxWidth: '1.5rem !important',
    //   minWidth: '1.5rem !important',
    //   maxHeight: '1.5rem !important',
    //   minHeight: '1.5rem !important',
    // },
    // '.avatar-sm': {
    //   maxWidth: '2rem !important',
    //   minWidth: '2rem !important',
    //   maxHeight: '2rem !important',
    //   minHeight: '2rem !important',
    // },
    // '.avatar': {
    //   maxWidth: '3rem',
    //   minWidth: '3rem',
    //   maxHeight: '3rem',
    //   minHeight: '3rem',
    // },
    // '.avatar-lg': {
    //   maxWidth: '5rem !important',
    //   minWidth: '5rem !important',
    //   maxHeight: '5rem !important',
    //   minHeight: '5rem !important',
    // },
    // '.avatar-xl': {
    //   maxWidth: '8rem !important',
    //   minWidth: '8rem !important',
    //   maxHeight: '8rem !important',
    //   minHeight: '8rem !important',
    // },
    image: {
      base: `h-full w-full object-cover rounded-full bg-purple-300`,
    },
    icon: {
      size: {
        xs: `!w-3 !h-full mx-auto`,
        sm: `!w-4 !h-full mx-auto`,
        base: `!h-6 !h-full mx-auto`,
        lg: `!w-10 !h-full mx-auto`,
        xl: `!w-16 !h-full mx-auto`,
      },
    },
    title: {
      base: `absolute rounded-full inset-0 font-bold uppercase flex items-center justify-center h-full w-full bg-purple-300 text-purple-600 no-underline`,
      size: {
        xs: `text-xs`,
        sm: `text-sm`,
        base: `text-base`,
        lg: `text-lg`,
        xl: `text-xl`,
      },
    },
    group: {
      base: `flex -space-x-4`,
    },
    // '.prose .avatar img': {
    //   '@apply mt-0 mb-0': {},
    // },
  },
  Status: {
    base: `relative rounded-full select-none text-center no-underline inline-block`,
    color: {
      offline: ` bg-gray-500`,
      online: ` bg-green-500`,
      focused: ` bg-purple-500`,
      busy: ` bg-red-500`,
    },
    position: {
      'top-right': `absolute top-0 right-0 w-3 h-3 rounded-full`,
      'top-left': `absolute top-0 left-0 w-3 h-3 rounded-full`,
      'bottom-right': `absolute bottom-0 right-0 w-3 h-3 rounded-full`,
      'bottom-left': `absolute bottom-0 left-0 w-3 h-3 rounded-full`,
    },
  },
  Badge: {
    base: `text-center no-underline font-semibold relative overflow-hidden py-1 px-3 w-auto inline-flex items-center leading-none whitespace-no-wrap align-baseline text-xs rounded-full transition-colors duration-150 ease-in no-underline cursor-default`,
    focus: `focus:shadow-outline focus:outline-none`,
    active: `active:shadow-outline active:outline-none`,
    // close button
    btn: 'border-0 ml-1 -mr-1',
    variant: {
      solid: {
        primary:
          'bg-purple-600 text-white hover:bg-purple-700 focus:bg-purple-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-800 focus:bg-gray-800',
        success:
          'bg-green-700 text-white hover:bg-green-900 focus:bg-green-900',
        danger: 'bg-red-700 text-white hover:bg-red-900 focus:bg-red-900',
        warning:
          'bg-yellow-600 text-white hover:bg-yellow-800 focus:bg-yellow-800',
        light: 'bg-gray-200 text-gray-900 hover:bg-gray-400 focus:bg-gray-400',
        dark: 'bg-gray-900 text-white hover:bg-gray-700 focus:bg-gray-700',
      },
      light: {
        primary:
          'bg-purple-300 text-purple-600 hover:bg-purple-700 hover:text-purple-300 focus:bg-purple-700 focus:text-purple-300',
        secondary:
          'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-300 focus:text-gray-900',
        success:
          'bg-green-200 text-green-800 hover:bg-green-300 hover:text-green-900 focus:bg-green-300 focus:text-green-900',
        danger:
          'bg-red-200 text-red-700 hover:bg-red-300 hover:text-red-900 focus:bg-red-300 focus:text-red-900',
        warning:
          'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 hover:text-yellow-900 focus:bg-yellow-300 focus:text-yellow-900',
        light: 'bg-gray-200 text-gray-900 hover:bg-gray-400 focus:bg-gray-400',
        dark: 'bg-gray-900 text-white hover:bg-gray-700 focus:bg-gray-700',
      },
    },
  },
  Breadcrumb: {
    base: `flex flex-wrap py-1 px-3 list-none rounded relative whitespace-no-wrap mt-0 mb-0`,
    item: {
      base: `text-gray-600 text-base flex items-center mt-0 mb-0`,
      active: `text-gray-900 no-underline`,
    },
    // class="
    separator: {
      base: `inline-block px-3 text-gray-600 last:hidden`,
    },
    mix: {
      // icon
      '.breadcrumb-item svg': {
        '@apply h-4 w-4 mr-1': {},
        minWidth: '1.00rem',
      },
      // size
      '.breadcrumb-sm .breadcrumb-item, .breadcrumb-sm .breadcrumb-item a': {
        '@apply text-xs !important': {},
      },
      '.breadcrumb-sm .breadcrumb-item svg': {
        '@apply h-3 w-3 !important': {},
        minWidth: '0.75rem',
      },
      '.breadcrumb-lg .breadcrumb-item, .breadcrumb-lg .breadcrumb-item a': {
        '@apply text-xl !important': {},
      },
      '.breadcrumb-lg .breadcrumb-item svg': {
        '@apply h-5 w-5 !important': {},
        minWidth: '1.25rem',
      },
      // size end

      // dark-light
      '.breadcrumb.breadcrumb-dark, .prose ul.breadcrumb.breadcrumb-dark': {
        '@apply bg-gray-900 border-gray-900 text-white': {},
      },
      '.breadcrumb.breadcrumb-dark .breadcrumb-item, .prose ul.breadcrumb.breadcrumb-dark .breadcrumb-item': {
        '@apply text-white': {},
      },
      '.breadcrumb.breadcrumb-dark .breadcrumb-item a, .prose ul.breadcrumb.breadcrumb-dark .breadcrumb-item a': {
        '@apply text-primary-light': {},
      },
      '.breadcrumb.breadcrumb-dark .breadcrumb-item::before, .prose ul.breadcrumb.breadcrumb-dark .breadcrumb-item::before': {
        '@apply text-white': {},
      },
    },
  },
}

export type Theme = typeof theme

export default theme
