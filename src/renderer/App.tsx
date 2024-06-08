import { Button, Flex, Text } from "@radix-ui/themes";

// import * as gql from "schemas/src/generated/renderer/gql";
const Hoge = () => {
  window.mainProcess.gql<{ hello: 'world' }>("{ hello }").then(res => console.log(res.data.hello));
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
