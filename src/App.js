import logo from './logo.svg';
import './App.css';
import '@gdwc/components/menu';
function App() {
  return (
    <div className="App">
      <gdwc-menu branding="Menu Heading" baseUrl="https://decoupled-menus.jsonapi.dev" menuId="main"></gdwc-menu>
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
    </div>
  );
}

export default App;
