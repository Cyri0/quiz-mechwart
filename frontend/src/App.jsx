import React, {useState, useEffect} from 'react'

const App = () => {
  const URL =  "http://127.0.0.1:8000/api/"
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setQuestions(data))
  },[])

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
        <button className="answer">{questions[number].answer1}</button>
        <button className="answer">{questions[number].answer2}</button>
        <button className="answer">{questions[number].answer3}</button>
        <button className="answer">{questions[number].answer4}</button>

        <button className="next">Következő</button>
      </>
      }
    </div>
  )
}

export default App