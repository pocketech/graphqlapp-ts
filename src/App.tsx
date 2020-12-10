import { ApolloProvider, useQuery } from '@apollo/client'
import { client } from './client'
import { RepoData, MeData } from './graphql'



const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <header>
          <p className="text-yellow-300">
            Hello,GraphQL
        </p>
          <MeData />
          <RepoData />
        </header>
      </div>
    </ApolloProvider>
  )
}


export default App
