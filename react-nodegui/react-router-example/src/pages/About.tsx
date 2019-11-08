import React from "react";
import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { useHistory } from "react-router";
import { QPushButtonEvents } from "../../../../../nodegui/dist";

export default function About() {
  const history = useHistory();
  const handler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => history.goBack() },
    []
  );
  return (
    <View>
      <Text>About</Text>
      <Text>You are now looking at the About Page 😱</Text>
      <Button on={handler} text={`Go to Home`}></Button>
    </View>
  );
}
