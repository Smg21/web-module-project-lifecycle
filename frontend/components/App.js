import React from 'react'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div id = "error">Error: No Error Here</div>
        <div id = "todos">
          <h2>TODOS:</h2>
          <div>Walk The Dog</div>
          <div>Learn React</div>
        </div>
        <form id="todoform">
          <input type="text"></input>
          <input type="submit"></input>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}
