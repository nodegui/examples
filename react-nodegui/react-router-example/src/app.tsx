import { Window, hot } from "@nodegui/react-nodegui";
import React from "react";
import { MemoryRouter } from "react-router";
import AppRoutes from "./routes";
const minSize = { width: 500, height: 520 };

class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Window windowTitle="Hello 👋🏽" minSize={minSize}>
          <AppRoutes />
        </Window>
      </MemoryRouter>
    );
  }
}

export default hot(App);
