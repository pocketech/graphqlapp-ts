import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const endpoint = 'https://api.github.com/graphql'
const httpLink = createHttpLink({
  uri: endpoint
})

const authLink = setContext((_, { headers }) => {
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
  return {
    headers: {
      ...headers,
      authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : ""
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
