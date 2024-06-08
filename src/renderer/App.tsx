import { Button, Flex, Text } from "@radix-ui/themes";

// import * as gql from "schemas/src/generated/renderer/gql";
const Hoge = () => {
  window.mainProcess.gql(`{ hello }`).then((res) => console.log(res.data));
  window.mainProcess.gql(`{ rollThreeDice }`).then((res) => console.log(res.data));
  window.mainProcess
    .gql(
      `query GetBooks {
  books {
    title
  }
}`,
    )
    .then((res) => console.log(res.data));
  return <>hoge</>;
};

export default function App() {
  return (
    <Flex direction="column" gap="2">
      <Hoge />
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
