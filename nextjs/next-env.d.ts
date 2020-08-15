/// <reference types="next" />
/// <reference types="next/types/global" />
import bumbagVendor from 'bumbag';

declare module 'bumbag' {
  bumbagVendor;
  declare function useColorMode(): {
    colorMode: 'default' | 'dark';
    toggleColorMode: () => void;
  };
}
