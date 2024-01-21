import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Hangman from "./Hangman";

const App = () => {
  return (
    <PaperProvider>
      <Hangman />
    </PaperProvider>
  );
};

export default App;
