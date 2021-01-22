import React, { useRef } from 'react'
// import { addItem } from './list-controller'
import { nanoid } from 'nanoid'
import { FancyButton } from '../styles'

const AddTodo = ({ lists, setLists }) => {
  const inputRef = useRef()
  return (
    <div>
      <input style={{ marginRight: '5px' }} type="text" placeholder="Enter todo item" id="add todo input" ref={inputRef} />
      <FancyButton
        onClick={
          () => {
            const input = document.getElementById('add todo input')
            if (input.value.trim().length !== 0) {
              const newEntry = { id: nanoid(), text: input.value }
              setLists({
                fullList: lists.fullList.concat([newEntry]),
                shownList: lists.shownList.concat([newEntry]),
                numEntries: lists.numEntries + 1,
              })
            }
            inputRef.current.focus()
            input.value = ''
          }
        }
      >
        Add entry
      </FancyButton>
    </div>
  )
}

export default AddTodo
