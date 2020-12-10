import { ApolloProvider, useQuery, gql } from '@apollo/client'
import { client } from './index'

const ME = gql`
  query me { 
    user(login: "iteachonudemy") {
      name
      avatarUrl
    }
  }
`
const MeData = () => {
  const { loading, error, data } = useQuery(ME)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return <p>{data.user.name}</p>
}

const App = () =>
  <ApolloProvider client={client}>
    <div>
      <header>
        <p className="text-yellow-300">
          Hello,GraphQL
        </p>
        <MeData />
      </header>
    </div>
  </ApolloProvider>



export default App
