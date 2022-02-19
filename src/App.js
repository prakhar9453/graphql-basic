import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, ApolloCache } from '@apollo/client';
import {onError} from '@apollo/client/link/error/index'
import './App.css';
import { GetPastLaunch } from './component/GetPastLaunch';

const errorLink = onError(({graphqlErrors, networkErrors})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`)
    })
  }
});
const link = from([
  errorLink,
  new HttpLink({uri: 'https://api.spacex.land/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
  <ApolloProvider client={client}>
    <GetPastLaunch/>
    </ApolloProvider>
  );
}

export default App;
