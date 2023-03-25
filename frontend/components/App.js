import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [], 
    error:'',
    todoNameInput:'',
  }

  //ONTODONAMEINPUTCHANGE (Change Handler)
  onTodoNameInputChange = evt => {
    const { value } = evt.target
   this.setState({ ...this.state, todoNameInput: value})
  }

//POST NEW TODO HELPER (Called when form submits)
postNewTodo = () => {
  axios.post(URL, { name: this.state.todoNameInput })
  .then (res => {
    this.fetchAllTodos()
    this.setState({ ...this.state, todoNameInput:''})
  })
  .catch(err => {
    this.setState({ ...this.state, error: err.response.data.message})
  })
}

//Todo Form Submit (Submit Handler)
onTodoFormSubmit = (evt) => {
  evt.preventDefault()
  this.postNewTodo()
}


  //FETCHALL METHOD
  fetchAllTodos = () => {
    axios.get(URL)
    .then(res => {
      this.setState({ ...this.state, todos: res.data.data })
    })
    .catch(err => {
      this.setState({ ...this.state, error: err.response.data.message})
      //console.log(err)
    })

  }

  //COMPONENTDIDMOUNT
  componentDidMount(){
    this.fetchAllTodos()

  }
  render() {
    return (
      <div>
        <div id = "error">Error: {this.state.error}</div>
        <div id = "todos">
          <h2>TODOS:</h2>
          {
            this.state.todos.map(td => {
              return <div key = {td.id}>{td.name}</div>
            })
          }
        </div>
        <form id="todoform" onSubmit={this.onTodoFormSubmit}>
          <input value={this.state.todoNameInput} onChange={this.onTodoNameInputChange} type="text"></input>
          <input type="submit"></input>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}
