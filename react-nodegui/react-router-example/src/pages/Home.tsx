import React from "react";
import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { useHistory } from "react-router";
import { QPushButtonEvents } from "../../../../../nodegui/dist";

export default function Home() {
  const history = useHistory();
  const handler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => history.push("/about") },
    []
  );
  return (
    <View>
      <Text>Home Page</Text>
      <Text>You are now looking at Home Page 🤓</Text>
      <Button on={handler} text="Go to about"></Button>
    </View>
  );
}
