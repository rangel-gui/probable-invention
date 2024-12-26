import { Button } from "probable-invention";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}> {count} </Button>
    </>
  );
}

export default App;
