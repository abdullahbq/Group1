import React, { useState } from "react"
import styled from "styled-components"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

const Pagination = styled.div`
  height: auto;
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  align-items: center;
  grid-template-columns: 95fr 5fr;

  > span1 {
    font-size: 20px;
  }
  span2 {
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className="card border-primary shadow mb-4"
      style={{
        backgroundColor: "#" + Math.random().toString(16).slice(-6) + "10",
      }}
    >
      <div
        className="card-header p-0 border-0"
        onClick={() => setIsActive(!isActive)}
        role="presentation"
      >
        <Pagination>
          <span1 className="fw-bold text-primary" type="button">
            {title}
          </span1>
          <span2 className="text-primary">
            {isActive ? <FaArrowUp /> : <FaArrowDown />}
          </span2>{" "}
        </Pagination>
      </div>
      {isActive && (
        <div className="card-body">
          <p className="card-text">{content}</p>
        </div>
      )}
    </div>
  )
}

export default Accordion
