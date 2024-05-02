import logo from './logo.svg';
import './App.css';
import { Komponenta1, Komponenta2, Komponenta3, Komponenta4 } from './Components';

const randomString = require("random-string");
const str = randomString({length: 20});
const str2 = randomString({length: 10, numeric: false, letters: false, special: true});

function App() {
  return (
    <>
      <header className="App-header">
        <h1>First app</h1>
        <h2>{str2}</h2>
        <Komponenta1 />
        <Komponenta2 />
        <Komponenta3 />
        <Komponenta4 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{str}</p>
      </header>
    </>
  );
}

export default App;

