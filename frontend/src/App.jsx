import React, {useState, useEffect} from 'react'

const App = () => {
  const URL =  "/api/"
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setQuestions(data))
  },[])

  const testMyAnswer = (selected,e) => {
    if(questions[number][selected])
      {
        console.log("Jó válasz!");
        e.target.style.backgroundColor = "green"
      
      }
      else{
        console.log("Hibás válasz!");
        e.target.style.backgroundColor = "red"

      }
  }

  return (
    <div className='container'>
      <h2>
        Kérdés {number + 1} / {questions.length}
      </h2>
      {
      questions.length <= 0 ?
      <h1>Loading..</h1> :
      <>
        <h1>{questions[number].question}</h1>

        <button onClick={(e)=>testMyAnswer("answer1_is_true",e)} className="answer">{questions[number].answer1}</button>
        <button onClick={(e)=>testMyAnswer("answer2_is_true",e)} className="answer">{questions[number].answer2}</button>
        <button onClick={(e)=>testMyAnswer("answer3_is_true",e)} className="answer">{questions[number].answer3}</button>
        <button onClick={(e)=>testMyAnswer("answer4_is_true",e)} className="answer">{questions[number].answer4}</button>

        <button className="next" onClick={()=>{setNumber(number => number += 1)}}>Következő</button>
      </>
      }
    </div>
  )
}

export default App