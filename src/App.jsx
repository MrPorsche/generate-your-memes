import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./components/style/style.css";

function App() {

  // // Fetch Practice
  // const [sWarData, setSWarData] = useState(null);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch(`https://swapi.py4e.com/api/people/${count}`)
  //       .then(res => res.json())
  //       .then(data => setSWarData(data))
  // }, [count]);

  // function nextChar() {
  //   setCount(prevChar => prevChar + 1)
  // }

  // return (
  //   <>
  //     <div>
  //       <pre>{JSON.stringify(sWarData, null, 2)}</pre>
  //       <button onClick={nextChar}>Next Character</button>
  //     </div>
  //   </>
  // )
  

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
