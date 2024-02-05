import { Terminal } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle, Button } from "ui";

import "ui/dist/style.css";

function App() {
  const [mode, setMode] = useState("light");

  function toggleDarkMode() {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }
  return (
    <div
      className={`flex align-center justify-start ${mode} flex-col h-[100vh]`}
    >
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <div className="py-4">
        <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
      </div>
      <div className="py-4">
        <Button variant="destructive" className="text-yellow-300">
          Button
        </Button>
      </div>
      <div className="py-4">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

export default App;
