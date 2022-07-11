import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> TODO LIST </h1>
        <ul>
          <li>Make Lunch</li>
          <li>Walk the Cat</li>
          <li>Wash your shoes</li>
        </ul>

        <form>
          <input type='text' value='Enter a Todo'/>
          <input type='submit' value='Add Todo'/>
        </form>
        <button> Clear Todos </button>
      </div>
    )
  }
}
