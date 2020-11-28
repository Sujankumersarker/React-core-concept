import logo from './logo.svg';
import './App.css';

function App() {
  var person={
    Name:"Sujan Kumer Sarker",
    Job:"Company"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <h1>heading:{person.Name + " Job: " + person.Job}</h1>
         <p>{(50.2*60)/(60*8*.65)}</p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
