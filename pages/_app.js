import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'



export default function App({ Component, pageProps }) {
  return (
    < ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
