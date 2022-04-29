import React from "react"
import Layout from "../components/Layout/Layout"
import QuestionBank from "../components/Quiz/QuestionBank"
import QuestionBox from "../components/Quiz/QuestionBox"
import QuestionBoxResponse from "../components/Quiz/QuestionBoxResponse"

class QuizMe extends React.Component {
  state = {
    questionBank: [],
    responses: 0,
    correctAnswer: [],
  }
  getQuestions = () => {
    QuestionBank().then(question => {
      this.setState({
        questionBank: question,
      })
    })
  }
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        correctAnswer: correctAnswer,
      })
    } else {
      this.setState({
        correctAnswer: correctAnswer,
      })
    }
    this.setState({
      responses: 1,
    })
  }
  playAgain = () => {
    this.getQuestions()
    this.setState({
      responses: 0,
    })
  }
  componentDidMount() {
    this.getQuestions()
  }
  render() {
    return (
      <Layout>
        <section className="quiz-section">
          <h2 className="pb-2 border-bottom text-center">Quiz</h2>
          <div className="container py-5">
            <div className="row">
              {this.state.questionBank.length > 0 &&
                this.state.responses < 1 &&
                this.state.questionBank.map(
                  ({ question, answers, correct, questionId }) => (
                    <QuestionBox
                      question={question}
                      options={answers}
                      key={questionId}
                      selected={answer => this.computeAnswer(answer, correct)}
                    />
                  )
                )}

              {this.state.responses === 1 ? (
                <div>
                  {this.state.questionBank.map(
                    ({ question, answers, questionId }) => (
                      <QuestionBoxResponse
                        question={question}
                        options={answers}
                        key={questionId}
                        correctAnswer={this.state.correctAnswer}
                        playAgain={this.playAgain}
                      />
                    )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default QuizMe
