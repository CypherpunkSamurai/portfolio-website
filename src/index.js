import React from "react";
import ReactDOM from "react-dom/client";
//
import reportWebVitals from "./reportWebVitals";

// App
import App from "./App";

// Chakra UI
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
      <ColorModeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ColorModeProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
