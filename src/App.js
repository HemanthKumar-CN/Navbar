import logo from './logo.svg';
import './App.css';
import Links from './component/link';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <h2>LOGOBAKERY</h2>
      {/* <div  className="dis">
      <a href="">Services</a>
      <a href="">Projects</a>
      <a href="">About</a>
      </div> */}

        <div className='dis'>
        <Links/>
        </div>

      

      <button className="button">Contact</button>


    </div>
  );
}

export default App;
