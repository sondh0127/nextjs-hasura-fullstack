import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import {
  faEllipsisV,
  faExclamationCircle,
  faMapMarkedAlt,
  faMoon,
  faPlus,
  faSun,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { css, ThemeConfig } from 'bumbag'

const theme: ThemeConfig = {
  global: {
    fontSize: 16,
    styles: {
      base: css``,
    },
  },

  palette: {
    // primary: 'blue',
    modes: {
      dark: {
        background: '#1a212d',
        text: 'white',
      },
      // dope: {
      //   background: 'hotpink',
      // },
    },
  },
  // breakpoints: {
  //   mobile: 520,
  //   tablet: 960,
  // },
  // Button: {
  //   defaultProps: {
  //     palette: 'primary',
  //   },
  // },
  // Heading: {
  //   styles: {
  //     base: {
  //       color: 'primary',
  //     },
  //   },
  // },
  Icon: {
    iconSets: [
      {
        icons: [
          faSun,
          faMoon,
          faExclamationCircle,
          faMapMarkedAlt,
          faEllipsisV,
          faPlus,
          faTrashAlt,
        ],
        prefix: 'solid-',
        type: 'font-awesome',
      },
      {
        icons: [faAddressBook],
        prefix: 'regular-',
        type: 'font-awesome',
      },
    ],
  },
  // TopNav: {
  //   styles: {
  //     base: {
  //       background: '#ffe3a4',
  //     },
  //   },
  // },
}

export default theme
