import React from 'react'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
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
        <ul>
          {
            todos.map(todo =>{
              return (<li>{todo.name} {todo.completed ? <span>- Completed!</span> : <span></span>}</li>)
            })
          }
        </ul>

        <form>
          <input type='text' value='Enter a Todo'/>
          <button>Add Todo</button>
        </form>
        <button> Clear Todos </button>
      </div>
    )
  }
}
