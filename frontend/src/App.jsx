import React, {useState, useEffect} from "react"

function App(){
  const [message, setmessage] = useState("loading...")

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/api/test")
    .then(res => res.json())
    .then(data => setmessage(data.message))
  },[]);

  return(
    <h1>{message}</h1>
  )
};

export default App;