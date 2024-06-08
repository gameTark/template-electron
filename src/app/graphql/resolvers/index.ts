import fs from "fs";

const resolver = {
  books() {
    return [
      {
        id: "asdfasdf",
        title: "sadfasdfxzcvx",
        author: {
          id: "sadfasdfasd",
          name: "asfasffsdasdaf",
          age: "asfdslkjsfdklsdafj",
        },
      },
    ];
  },
  file: (args: { path: string }) => {
    const file = fs.statSync(args.path);
    return {
      type: file.isDirectory() ? "DIRECTORY" : "FILE",
      path: args.path,
      updatedAt: Number(file.mtime),
      size: file.size,
    };
  },
  rollThreeDice() {
    return [1, 2, 3];
  },
  hello() {
    return "Hello world!";
  },
};
export default resolver;
