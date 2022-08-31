  import './App.css';
  import { useState } from 'react'
  function Demo(props) {
    const [name, setName] = useState('');
    function info(e) {
      console.log('Hello world');
      e.preventDefault();
      props.notifyinfo(name);
    }

    return (
      <div>
        {/* {name} */}
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={info}>value transfer</button>
      </div>
    );
  }

  function App() {
    const [mess, setMess] = useState('');
    function getData(message) {
      setMess(message);
      //mess = message;
    }
    return (
      <div>
        <h1>{mess}</h1>
        <Demo notifyinfo={getData}></Demo>
      </div>
    );
  }

  export default App;
