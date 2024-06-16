import { BookSchema } from "./schema/Book";
import { FileSchema } from "./schema/File";

const resolver = {
  Query: {
    books() {
      return [new BookSchema({
        id: 'root',
        title: 'root title'
      })];
    },
    file: (args: { path: string }) => {
      return new FileSchema(args);
    },
    hello() {
      return "Hello world!";
    },
  }
};
export default resolver;
