import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button>
        Default <span>small</span>
      </Button>
      <Button className="mr-8" variant="primary">
        Primary
      </Button>
      <Button variant="secondary" actived>
        Secondary
      </Button>
    </div>
  );
}

export default App;
