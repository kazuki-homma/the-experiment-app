import './App.css';
import ProductList from './commponents/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          これは実験用アプリです
        </a>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
