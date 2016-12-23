import React from 'react'

export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={ onIncrement } >➕</button>
      <button onClick={ onDecrement} >➖</button>
      <h2>{ count }</h2>
    </div>
  )
}