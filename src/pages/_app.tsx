import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from '@material-ui/core'
import GlobalStyles from '@style/global'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f98d5b'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
export default App
