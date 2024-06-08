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
    rollThreeDice() {
      return [1, 2, 3];
    },
    hello() {
      return "Hello world!";
    },
  };
export default resolver;