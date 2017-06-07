import React from 'react'
import ReactDOM from 'react-dom'

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // set initial todos to null
      todos: []
    }
  }

  componentDidMount() {
    fetch("http://192.168.99.102:3000/todos", {
      method: "GET",
      headers: new Headers({
        'content-type': 'application/json; charset=utf-8'
      })
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({todos: json.todos})
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div>
          {todos.map((todo, i) =>
            <p key={i}>{todo.text}</p>
          )}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<AppComponent/>, document.getElementById('app'))
