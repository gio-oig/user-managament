import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/context/appContext";
import { theme } from "src/theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
