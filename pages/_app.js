import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { UIProvider } from '@/context/ui'
import { EntriesProvider } from '@/context/entries'



export default function App({ Component, pageProps }) {
  return (
    <EntriesProvider>
      <UIProvider>
        < ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>






  )
}
