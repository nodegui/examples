import { Window, View, hot } from "@nodegui/react-nodegui";
import React from "react";
import { MemoryRouter } from "react-router";
import AppRoutes from "./routes";
const minSize = { width: 500, height: 520 };

class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Window windowTitle="Hello 👋🏽" minSize={minSize}>
          <View style={containerStyle}>
            <AppRoutes />
          </View>
        </Window>
      </MemoryRouter>
    );
  }
}

const containerStyle = `
  flex: 1; 
  height: '100%';
  border: 1px solid blue;
`

export default hot(App);
