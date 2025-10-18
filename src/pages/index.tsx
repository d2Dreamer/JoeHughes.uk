import React from "react";
import Console from "../components/Console";

export default function App() {
  const initialCommands = [
    'whoami',
    'pwd',
    'ls',
    'intro',
    'status'
  ];

  return <Console initialCommands={initialCommands} />;
}