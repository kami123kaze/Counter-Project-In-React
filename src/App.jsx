import { useState } from 'react'

import './App.css'



function App() { 
  let [Counter,setcnt] = useState(0);
  

    function addValue(){
      setcnt(prevCounter => {
        if(prevCounter >= 30){
          alert("stop, this is the highest you can go")
          return 30;
        }
        else{
          return prevCounter+1;
        }
      }); 
    }
    function dValue(){
      setcnt(prevCounter => {
        if(prevCounter === 0) {
          alert("The count is 0, cannot go lower");
         return 0;
      }
        else{
        return prevCounter -1}
      });
    }
    function dateUpdate(){

      const today = new Date();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const year  = today.getFullYear();
      const date  = today.getDate().toString().padStart(2, '0');

      return `${date}/${month}/${year}`;
    }

 return (
  <>
  <h1>Learning react</h1>
  <h2>
      Date started: <span>06/09/2024 </span>
       <hr /> 
       Current Date: <span className='CurrentDate'>{dateUpdate()} </span>
  </h2>
  <br />

  <h2>Counter value : {Counter}</h2> 
  <hr />
  <button onClick={addValue}>Add Value       </button>
  <button onClick={dValue  }>Decrement Value </button>
  <p>Learnt the "use state" hook/ how to implement logic inside etc</p>
  </>
 )
}

export default App
