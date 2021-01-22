import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TodoApp from './TodoListComponents/TodoApp'
import WeatherApp from './WelcomePageComponents/WeatherApp'

const App = () => (
  <div>
    <Switch>
      <Route path="/todo">
        <TodoApp />
      </Route>
      <Route path="/">
        <WeatherApp />
      </Route>
    </Switch>
  </div>
)

export default App
