import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from '@material-ui/core'
import GlobalStyles from '@style/global'
import { createMuiTheme } from '@material-ui/core/styles'
import { ToastProvider } from 'react-toast-notifications'
import axios from 'axios'
import { SWRConfig } from 'swr'
import Layout from '@components/Layout'
axios.defaults.baseURL = process.env.API_HOST_DEV

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
      <SWRConfig
        value={{ fetcher: (url: string) => axios(url).then(r => r.data) }}
      >
        <Layout>
          <ToastProvider style={{ zIndex: 9999999 }}>
            <Component {...pageProps} />
          </ToastProvider>
        </Layout>
      </SWRConfig>
      <GlobalStyles />
    </ThemeProvider>
  )
}
export default App
