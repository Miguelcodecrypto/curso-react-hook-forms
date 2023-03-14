import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useForm } from 'react-hooks-forms'

function App() {    
  const{register, handleSubmit} = useForm();

    function onSubmit(data) {
      console.log(data)
    }

    return (
     <div className="App">
    
       <form onSubmit={handleSubmit (onSubmit)}>
         <input {...register("campo1")} /><br></br>
         <input {...register("campo2")} /><br></br>
         <input type="submit" />
       </form> 
    </div>
  )
}

export default App
