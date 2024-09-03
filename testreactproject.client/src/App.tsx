import { useState } from "react";
import Count from "./Count";
import CountBtns from "./CountBtns";
import ResetBtn from "./ResetBtn";
import Title from "./Title";


function App() {
  let [count, setCount] = useState(0);

  return (
    <main>
      <div className="card">
        <Title />
        <Count count={count} />
        <ResetBtn setCount={setCount} />
        <CountBtns setCount={setCount} />
      </div>
    </main>
  );
}

export default App;