import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [], 
  }
  //FETCHALL METHOD
  fetchAllTodos = () => {
    axios.get(URL)
    .then(res => {
      this.setState({ ...this.state, todos: res.data.data })
    })
    .catch(err => {
      debugger
      console.log(err)
    })

  }
  //COMPONENTDIDMOUNT
  componentDidMount(){
    this.fetchAllTodos()

  }
  render() {
    return (
      <div>
        <div id = "error">Error: No Error Here</div>
        <div id = "todos">
          <h2>TODOS:</h2>
          {
            this.state.todos.map(td => {
              return <div key = {td.id}>{td.name}</div>
            })
          }
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
