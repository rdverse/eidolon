import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header-aaa">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <p>
          Edit <code>src/App.js</code> aaaaand save to reload.
        </p> */}

        <a
          className="App-link"
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google-sign-in
        </a>
...........................
        <a
          className="App-link"
          href="/api/current_user"
          target="_blank"
          rel="noopener noreferrer"
        >
          check-user
        </a>
        <a
          className="App-link"
          href="/api/logout"
          target="_blank"
          rel="noopener noreferrer"
        >
      logout
        </a>
      </header>
    </div>
  );
}

export default App;
