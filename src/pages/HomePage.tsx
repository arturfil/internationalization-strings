import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/strings.json";
import Selector from "../components/selector";
import langs from "../data/lang_keys";
import { Navigator } from "../components/Navigator";

interface Props {
  language: string;
  setLanguage: (e: string) => void;
}

const HomePage = ({ language, setLanguage }: Props) => {
  return (
    <div>
      <Navigator/>
      <h2>Home Page</h2>
      <p>{JSON.stringify(data[language].greetings)}</p>

      <Selector strings={langs} setLanguange={setLanguage}/>
    </div>
  );
};

export default HomePage;
