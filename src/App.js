import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import { useState } from "react";

import { searchPhonetic } from "./main";
import { playAudio, stopAudio } from "./Sound";

// Função principal do projeto
export default function App() {
  const [input, setInput] = useState("");
  const [phoneticText, setPhoneticText] = useState("");
  const [audio, setAudio] = useState("");
  const [text, setText] = useState("");

  // Remove o espaço em branco do input
  function removeSpace({ target }) {
    setInput(target.value.replace(" ", ""));
  }

  // Faz a consulta ao pressionar o ENTER
  function enterSearch({ code, target }) {
    if (code === "Enter") {
      if (isValidate()) {
        search(target.value);
      }
    }
  }

  // Função que verifica se o input possui algum texto
  function isValidate() {
    if (input) {
      return true;
    }

    return false;
  }

  // Consulta o termo que o usuario escreveu
  async function search() {
    if (isValidate()) {
      let consulta = await searchPhonetic(input);
      setAudio(consulta.audio);
      setPhoneticText(consulta.text);
      setText(input);
    }
  }

  return (
    <>
      <header className="title">How To Pronounce</header>
      {/* HEADER */}

      <main className="container">
        <div className="box-search">
          <Input
            value={input}
            onChange={removeSpace}
            onKeyPress={enterSearch}
          />
          <Button onClick={search} texto={"Procurar"} />
        </div>

        <div className="box-found">
          <Label texto={text} className="busca" />

          {phoneticText && (
            <>
              <audio controls src={audio} type="audio/mpeg" id="audio" />
              <Label
                texto={phoneticText}
                className="resultado"
                onMouseOver={() => {
                  playAudio(audio);
                }}
                cursor={!audio && "not-allowed"}
                title={!audio ? "Sem Audio" : ""}
                onMouseOut={() => {
                  stopAudio(audio);
                }}
              />
            </>
          )}
        </div>
      </main>
      {/* MAIN */}
    </>
  );
}
