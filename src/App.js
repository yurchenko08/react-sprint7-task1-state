import { useState } from "react";
import "./App.css";
export default function App() {
  const [text, setText] = useState("React Marathon");
  return <div onClick={() => setText(text.toLowerCase())}> {text} </div>;
}
