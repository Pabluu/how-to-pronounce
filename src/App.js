import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

export default function App() {
  return (
    <>
      <header class="title">How To Pronounce</header>
      <Input />
      <Button />

      <div className="box-search">
        <Label texto="Resultado" class="title" />
        <Label texto="In" class="busca" />
        <Label texto="/in/" class="resultado" />
      </div>
    </>
  );
}
