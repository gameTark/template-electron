import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useGetBooksQuery } from 'schemas/src/generated/renderer/gql';
import { PROTOCOLS } from "../constants/protocols";

const client = new ApolloClient({
  uri: `${PROTOCOLS.GQL}://`,
  cache: new InMemoryCache(),
});

const Hoge = () => {
  const book = useGetBooksQuery();
  return (
    <ul>
      {
        book.data?.books.map(val => {
          return (
            <li key={val.title}>
              {val.title}
            </li>
          )
        })
      }
    </ul>
  )
}
export default function App() {

  return (
    <ApolloProvider client={client}>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
        <Hoge />
      </Flex>
    </ApolloProvider>
  );
}
