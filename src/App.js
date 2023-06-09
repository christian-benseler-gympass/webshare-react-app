import "./App.css";
import useWebShare from "react-use-web-share";

const url =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

function App() {
  const { isSupported, share } = useWebShare();

  function onClick(event) {
    if (isSupported) {
      share({
        title: "Share sample",
        text: "Some text",
        url,
      });
    } else {
      window.open(url, "_blank");
    }

    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>Share</button>
      </header>
    </div>
  );
}

export default App;
