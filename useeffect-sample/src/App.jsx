import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
/*
  //No Dependencies
  useEffect(() => {
    console.log("I am No Dependencies useEffect")
  });
*/

/*
  //Empty Dependencies Array
  useEffect(() => {
    console.log("I am Empty Dependencies useEffect")
  },[])
*/

  //State Dependencies Array
  // useEffect(() => {
  //   console.log("I am Empty Dependencies useEffect")
  // },[count])

  //On Mount Cleanup Code
  // useEffect(() => {
  //   console.log("Mounted")
  //   return () => console.log("Un-Mounted")
  // },[])

  //Re-render Cleanup Code
  // useEffect(() => {
  //   console.log("Mounted")
  //   return () => console.log("Un-Mounted")
  // })

  //State Counter Cleanup Code
  // useEffect(() => {
  //   console.log("State Counter")
  //   return () => console.log("State Counter Cleanup")
  // },[count])

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * 1000)
  //   const timer = setInterval(() => {
  //     console.log(`${random} - Re-render`);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // },[])

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [count]);


  return (
    <>
    <div>
      <h1>Total:{count}</h1>
      <h1>Times : {time}</h1>
      <button onClick={()=>setCount(value=>(value-1))}>-</button>
      <button onClick={()=>setCount(value=>(value+1))}>+</button>
      <button onClick={()=>setTime(value=>(value+1))}>T</button>
    </div>
    </>
  )
}

export default App
