import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Walk the Cat',
          id: 15288170523890,
          completed: false
        },
        {
          name: 'Wash the Roof',
          id: 1528817063421,
          completed: false
        }
        
      ]
    }
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1> TODO LIST </h1>
        <TodoList todos = {todos}/>

        <Form />
        <button>Clear</button>
      </div>
    )
  }
}
