import * as React from 'react'

import { CacheProvider, EmotionCache } from '@emotion/react'

import { AppProps } from 'next/app'
import createEmotionCache from '../createEmotionCache'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import theme from '../theme'
import { ThemeProvider } from '@mui/material/styles'
import Header from '../components/global/Header'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <Header>
          <Component {...pageProps} />
        </Header>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  )
}
