import { ApolloProvider } from '@apollo/client'
import { client } from './client'
import MeData from './graphql'



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
