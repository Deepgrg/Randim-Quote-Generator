import classes from "./QuoteBox.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const QuoteBox = (props) => {
  const { randomQuote, themeColor, randomize, loading } = props;

  const variableColor = {
    color: `${themeColor}`,
  };
  const variableBackground = {
    backgroundColor: `${themeColor}`,
  };
  let quoteJSX;
  quoteJSX = (
    <>
      <h2 style={variableColor}>"{randomQuote.text}"</h2>
      <p style={variableColor}>
        - {randomQuote.author ? randomQuote.author : "Anonymous"}
      </p>
    </>
  );
  if (loading) {
    quoteJSX = <p style={variableColor}>Loading...</p>;
  }

  return (
    <div className={classes.quoteBox}>
      {/* Quote text and author name */}
      <div className={classes.quote}>{quoteJSX}</div>

      {/* Buttons on the quote box */}
      <div className={classes.linkButtons}>
        <div className={classes.leftButtons}>
          <button style={variableBackground}>
            <a
              href="https://twitter.com/login?lang=en-gb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ color: "white" }} />
            </a>
          </button>
          <button style={variableBackground}>
            <a
              href="https://github.com/Deepgrg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ color: "white" }} />
            </a>
          </button>
        </div>
        <div className={classes.rightButtons}>
          <button style={variableBackground} onClick={randomize}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
