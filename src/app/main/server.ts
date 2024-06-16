import { ApolloServer } from '@apollo/server';
import { protocol } from 'electron';
import defs from 'schemas/schema.graphql?raw';

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'project-management-example',
    privileges: {
      supportFetchAPI: true,
    }
  }
])
// クエリで取得するデータを定数で置いておく
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
  },
  {
    title: "Jurassic Park",
  }
];

// booksクエリ発行時の処理を指定する
const resolvers = {
  Query: {
    books: () => books
  }
};

const main = () => {
  const server = new ApolloServer({ typeDefs: defs, resolvers });

  protocol.handle('project-management-example', async (req: GlobalRequest) => {
    const reqData = await req.json()
    const data = await server.executeOperation({
      'query': reqData.query,
      variables: reqData.variables,
    }) as any;
    const res = new Response(JSON.stringify(data.body.singleResult));
    return res;
  })
}
export default main;