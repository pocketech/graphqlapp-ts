import { ApolloProvider } from '@apollo/client'
import { client } from './index'

const App = () =>
  <ApolloProvider client={client}>
    <div>
      <header>
        <p className="text-yellow-300">
          Edit
          </p>
      </header>
    </div>
  </ApolloProvider>


export default App
