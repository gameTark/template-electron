import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from "@apollo/client";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useGetBooksQuery } from 'schemas/src/generated/renderer/gql';

const client = new ApolloClient({
  uri: "project-management-example://",
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
