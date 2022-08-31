import './App.css';
import {useState} from 'react'
function App() {
    const [inputs , setInputs] = useState ({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setInputs(values => ({...values,[name]:value}))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
    
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className='form-label mt-5'>Username : </label>
        <input
        type="text"
        className='form-control'
        name="username"
        value={inputs.username || ""}
        onChange = {handleChange}
        />

<label className='form-label mt-5'>Age : </label>
        <input
        type="number"
        className='form-control'
        name="age"
        value={inputs.age || ""}
        onChange = {handleChange}
        />
        <input 
        className='rounded mt-3 '
        type="submit"
        />
        
      </form>
      
    </div>
  );
}

export default App;
