import React, { useState } from "react"
import styled from "styled-components"
import { FaArrowRight } from "react-icons/fa"

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

const QuestionBoxNoResponse = ({
  question,
  options,
  correctAnswer,
  playAgain,
}) => {
  const [answer] = useState(options)
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
        <div className="card-body text-center p-4">
          <Pagination>
            {answer.map((text, index) => (
              <button
                key={index}
                className={
                  text === correctAnswer
                    ? "btn btn-success m-2 shadow"
                    : "btn btn-danger m-2 shadow"
                }
              >
                {text}
              </button>
            ))}
          </Pagination>

          <div className="btn-group btn-group-lg text-decoration-none mt-4">
            <button
              onClick={playAgain}
              className="btn btn-primary btn-lg shadow"
            >
              <span className="mx-4">Next Question</span>
            </button>
            <button className="btn btn-light btn-lg shadow">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionBoxNoResponse
