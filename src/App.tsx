import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "mui-custom-lib";
import { SomeComponent } from "./playground/SomeComponent";
import { Button } from "mui-custom-lib";
import { Card, Modal } from ".";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const customLightColors = {
    primary: {
      main: "#FF0000",
    },
  };

  const customDarkColors = {
    primary: {
      main: "#00FF00",
    },
  };

  return (
    <div className="App">
      <ThemeProvider
        defaultThemeMode="dark"
        customLightColors={customLightColors}
        customDarkColors={customDarkColors}>
        <SomeComponent></SomeComponent>

        <div
          style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16 }}>
          {/* Primary Button */}
          <Button
            variant="primary"
            label="Primary Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Secondary Button */}
          <Button
            variant="secondary"
            label="Secondary Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Ghost Button */}
          <Button
            variant="ghost"
            label="Ghost Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Outlined Button */}
          <Button
            variant="primary"
            outlined
            label="Outlined Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Success Button */}
          <Button
            variant="primary"
            type="success"
            label="Success Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Danger Button */}
          <Button
            variant="primary"
            type="danger"
            label="Danger Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Warning Button */}
          <Button
            variant="primary"
            type="warning"
            label="Warning Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Disabled Button */}
          <Button
            variant="primary"
            label="Disabled Button"
            disabled
            isLoading={isLoading}
            onClick={handleClick}></Button>

          {/* Loading Button */}
          <Button
            variant="secondary"
            label="Loading Button"
            isLoading={true}
            onClick={handleClick}></Button>

          {/* Custom CSS Button */}
          <Button
            variant="primary"
            label="Custom CSS Button"
            isLoading={isLoading}
            onClick={handleClick}></Button>
        </div>
        <Card
          variant="elevated"
          padding="16px"
          margin="16px"
          header="Custom Card Header"
          content="Custom Card Content"
          footer="Custom Card Footer"
        />
        <div>
          <button onClick={handleOpenModal}>Open Custom Modal</button>

          <Modal
            open={openModal}
            onClose={handleCloseModal}
            padding="24px"
            margin="8px"
            Css={`
    background-color: lightblue;
    color: navy;
    border: 2px solid darkblue;
  `}>
            <h2>Custom Modal Content</h2>
            <p>This is a draggable custom modal.</p>
            <button onClick={handleCloseModal}>Close</button>
          </Modal>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
