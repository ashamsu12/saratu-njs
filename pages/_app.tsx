import { ApolloProvider } from '@apollo/client'
import React from 'react'
import 'tailwindcss/tailwind.css'
import { useApollo } from '../apollo/client'
import { RouteGuard } from '../guards/route-guard'


function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <RouteGuard>
      <Component {...pageProps} />
      </RouteGuard>
    </ApolloProvider>
  )
}

export default MyApp
