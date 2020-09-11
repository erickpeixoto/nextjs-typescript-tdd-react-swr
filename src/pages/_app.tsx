import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@style/global'
import Theme from '@style/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
export default App
