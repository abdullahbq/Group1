import React, { useState } from "react"
import styled from "styled-components"

const Pagination = styled.div`
  height: auto;
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  > span {
    font-size: 16px;
    text-transform: uppercase;
  }
`

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options)
  return (
    <div className="col-lg-12 mb-4">
      <div
        className="card border-primary shadow"
        style={{
          backgroundColor: "#" + Math.random().toString(16).slice(-6) + "10",
        }}
      >
        <div className="card-header text-center">
          <h5>{question}</h5>
        </div>
        <div className="card-body p-4">
          <Pagination>
            {answer.map((text, index) => (
              <button
                key={index}
                className="btn btn-outline-primary m-2 shadow"
                onClick={() => {
                  setAnswer([text])
                  selected(text)
                }}
              >
                {text}
              </button>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  )
}

export default QuestionBox
