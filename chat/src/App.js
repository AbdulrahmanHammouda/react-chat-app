import React from "react";
import './App.css';
import Parse from 'parse/dist/parse.min.js';
import { initializeParse } from "@parse/react";
import { ChatSetup } from "./ChatSetup";


const PARSE_APPLICATION_ID = 'UaOtNyKnn4E6ybvn27N4eg0OuFqqOagsNJsWmbbz';
const PARSE_LIVE_QUERY_URL = "https://sanchezapp.b4a.io/";
const PARSE_JAVASCRIPT_KEY = '8199mO3Ag8nnlO31tsalaUgxNts6I0F3AY2MZMue';

initializeParse(
  PARSE_LIVE_QUERY_URL,
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY
);

function App() {
  return (
    <div className="App">
      <ChatSetup />
    </div>
  );
}

export default App;
