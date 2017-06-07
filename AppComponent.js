import React from 'react'
import ReactDOM from 'react-dom'

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

ReactDOM.render(<AppComponent/>, document.getElementById('app'))
