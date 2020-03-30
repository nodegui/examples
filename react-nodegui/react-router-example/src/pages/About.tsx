import React from "react";
import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { useHistory } from "react-router";
import { QPushButtonSignals } from "@nodegui/nodegui";

export default function About() {
  const history = useHistory();
  const handler = useEventHandler<QPushButtonSignals>(
    { clicked: () => history.goBack() },
    []
  );
  return (
    <View
      style={`
        height: '100%'; 
        align-items: 'center';
        justify-content: 'center';
    `}
    >
      <Text>About</Text>
      <Text>You are now looking at the About Page 😱</Text>
      <Button on={handler} text={`Go to Home`}></Button>
    </View>
  );
}
