import React, { useReducer } from 'react'
import TodoEntry from './TodoEntry'
import AddTodo from './AddTodo'
import SearchBar from './SearchBar'
import { OuterDiv, InputDiv, WelcomeLink } from '../styles'

const TodoApp = () => {
  const listReducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [lists, setLists] = useReducer(listReducer,
    {
      fullList: [], shownList: [], numEntries: 0, search: '',
    })
  // const [search, setSearch] = useState('')
  const title = (lists.numEntries ? (` (${lists.numEntries} item${((lists.numEntries !== 1) ? 's' : '')} left)`) : '')
  return (
    <OuterDiv>
      <WelcomeLink to="/">Back</WelcomeLink>
      <h1>{`Todo List${title}`}</h1>
      <InputDiv>
        <AddTodo lists={lists} setLists={setLists} />
        <SearchBar lists={lists} setLists={setLists} />
      </InputDiv>
      {lists.shownList.length
        ? (lists.shownList.map(entry => (
          <TodoEntry
            key={entry.id}
            lists={lists}
            setLists={setLists}
            rank={lists.shownList.indexOf(entry)}
            {...entry}
          />
        )))
        : <p>No items to show.</p>}
    </OuterDiv>
  )
}

export default TodoApp
