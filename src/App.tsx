import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "./theme";
import { SomeComponent } from "./playground/SomeComponent";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <div className="App">
      <ThemeProvider>
        <SomeComponent></SomeComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
