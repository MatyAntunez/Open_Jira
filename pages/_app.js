import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { UIProvider } from '@/context/ui'



export default function App({ Component, pageProps }) {
  return (
    <UIProvider>
      < ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
