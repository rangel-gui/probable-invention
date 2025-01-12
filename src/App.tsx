import { Button, useTheme } from "@giuzus/probable-invention";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const { setTheme } = useTheme();

  return (
    <>
      <Button onClick={() => setTheme("dark")}> Dark </Button>
      <Button onClick={() => setTheme("light")}> Light </Button>
      <Button onClick={() => setCount(count + 1)}> {count} </Button>
    </>
  );
}

export default App;
