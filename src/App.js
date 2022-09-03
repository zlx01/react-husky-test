import logo from "./logo.svg";
import "./App.css";
// 这里经过prettier格式化后会变双引号
import { Foo } from "./Foo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <Foo></Foo>
    </div>
  );
}

export default App;
