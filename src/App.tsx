import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "./theme";
import { SomeComponent } from "./playground/SomeComponent";
import { Button } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const customLightColors = {
    primary: {
      main: "#FF0000", // Replace with your custom light color
    },
    // Add more custom light colors as needed
  };

  const customDarkColors = {
    primary: {
      main: "#00FF00", // Replace with your custom dark color
    },
    // Add more custom dark colors as needed
  };

  return (
    <div className="App">
      <ThemeProvider
        defaultThemeMode="dark"
        customLightColors={customLightColors}
        customDarkColors={customDarkColors}
      >
        <SomeComponent></SomeComponent>

        <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap" , gap: 16}}>
          {/* Primary Button */}
          <Button
            variant="primary"
            label="Primary Button"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Secondary Button */}
          <Button
            variant="secondary"
            label="Secondary Button"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Ghost Button */}
          <Button
            variant="ghost"
            label="Ghost Button"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Outlined Button */}
          <Button
            variant="primary"
            outlined
            label="Outlined Button"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Success Button */}
          <Button
            variant="primary"
            type="success"
            label="Success Button"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Danger Button */}
          <Button
            variant="primary"
            type="danger"
            label="Danger Button"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Warning Button */}
          <Button
            variant="primary"
            type="warning"
            label="Warning Button"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Disabled Button */}
          <Button
            variant="primary"
            label="Disabled Button"
            disabled
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>

          {/* Loading Button */}
          <Button
            variant="secondary"
            label="Loading Button"
            isLoading={true}
            onClick={handleClick}
          ></Button>

          {/* Custom CSS Button */}
          <Button
            variant="primary"
            label="Custom CSS Button"
            Css="background-color: purple; color: white;"
            isLoading={isLoading}
            onClick={handleClick}
          ></Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
