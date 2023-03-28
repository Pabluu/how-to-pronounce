import Input from "./Input";
import Button from "./Button";
// import Label from "./Label";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = "How To Pronounce";
  });

  // useEffect(() => {

  // }, [input])

  function removeSpace({ target }) {
    setInput(target.value.replace(" ", ""));
  }

  function searchPhonetic() {
    setInput("");
  }
  return (
    <>
      <header className="title">How To Pronounce</header>
      <main className="container">
        <div className="box-search">
        <Label texto="Resultado" class="title" />
        <Label texto="In" class="busca" />
        <Label texto="/in/" class="resultado" />
      </div>

        {/* <div className="box-found">
          <Label texto="Resultado" className="title" />
          <Label texto="In" className="busca" />
          <Label texto="/in/" className="resultado" />
        </div> */}
      </main>
    </>
  );
}
