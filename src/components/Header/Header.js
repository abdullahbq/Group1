import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Fifth navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PROJECT2022
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="btn text-danger fw-bold">
              <Link className="text-warning fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-warning fw-bold" to="/about">
                About
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-warning fw-bold" to="/contact">
                Contact
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-warning  fw-bold" to="/blog">
                Blog
              </Link>
            </li>

            <li className="btn text-danger fw-bold">
              <Link className="text-warning  fw-bold" to="/draw">
                Draw
              </Link>
            </li>

            <li className="btn text-danger fw-bold">
              <Link className="text-warning  fw-bold" to="/quiz">
                Quiz
              </Link>
            </li>
          </ul>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
