import create from 'zustand'

type ColorScheme = 'light' | 'dark'

type ColorSchemeStore = {
  colorScheme: ColorScheme
  toggleColorScheme: () => void
}

export const useColorScheme = create<ColorSchemeStore>((set) => ({
  colorScheme: 'light',
  toggleColorScheme: () =>
    set(({ colorScheme }) => ({
      colorScheme: colorScheme === 'light' ? 'dark' : 'light',
    })),
}))
