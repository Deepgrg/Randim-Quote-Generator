import { useState, useEffect } from "react";
import QuoteBox from "./Components/QuoteBox";
import classes from "./App.module.css";
import axios from "axios";

const myColors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#009688",
  "#03a9f4",
  "#4caf50",
  "#cddc39",
  "#ff9800",
  "#ff5722",
  "#607d8b",
];
const App = () => {
  // Application State
  const [themeColor, setThemeColor] = useState("#f44336");
  const [loading, setLoading] = useState(false);
  const [randomQuote, setRandomQuote] = useState({});

  // From api
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function getQuotes() {
      setLoading(true);
      const res = await axios.get("https://type.fit/api/quotes");
      const data = res.data;
      setQuotes(data);
      setRandomQuote(data[Math.floor(Math.random() * quotes.length)]);
      setLoading(false);
    }

    getQuotes();
  }, []);

  // To randomly select color and quote
  const randomize = () => {
    let randomColor = myColors[Math.floor(Math.random() * myColors.length)];
    let randomQuoteGenerated =
      quotes[Math.floor(Math.random() * quotes.length)];
    setThemeColor(randomColor);
    setRandomQuote(randomQuoteGenerated);
  };

  const rootStyle = {
    backgroundColor: `${themeColor}`,
  };
  return (
    <div className={classes.root} style={rootStyle}>
      <div className={classes.box}>
        <QuoteBox
          randomQuote={randomQuote}
          themeColor={themeColor}
          randomize={randomize}
          loading={loading}
        />
        <p className={classes.developer}>by Dip Sagun Gurung</p>
      </div>
    </div>
  );
};

export default App;

// https://type.fit/api/quotes
