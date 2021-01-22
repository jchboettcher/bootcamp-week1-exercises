/* eslint-disable no-nested-ternary */

import React from 'react'
// import { deleteItem } from './list-controller'
import {
  FancyButton, OddEntryDiv, EvenEntryDiv, TopEntryDiv,
} from '../styles'

const TodoEntry = ({
  id, lists, setLists, text, rank,
}) => {
  const deleteItem = id_ => ({
    fullList: lists.fullList.filter(({ id: id__ }) => id__ !== id_),
    shownList: lists.shownList.filter(({ id: id__ }) => id__ !== id_),
    numEntries: lists.numEntries - 1,
  })
  return (
    <>
      {rank
        ? (
          rank % 2 ? (
            <OddEntryDiv>
              <p>{text}</p>
              <FancyButton onClick={() => setLists(deleteItem(id))}>Delete</FancyButton>
            </OddEntryDiv>
          )
            : (
              <EvenEntryDiv>
                <p>{text}</p>
                <FancyButton onClick={() => setLists(deleteItem(id))}>Delete</FancyButton>
              </EvenEntryDiv>
            )
        )
        : (
          <TopEntryDiv>
            <p>{text}</p>
            <FancyButton onClick={() => setLists(deleteItem(id))}>Delete</FancyButton>
          </TopEntryDiv>
        )}
    </>
  )
}

export default TodoEntry
