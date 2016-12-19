import React from 'react'

export default function Button({ type = 'default', name="name" }){
  return (
    <div className={ ` btn btn-${ type }` }>
      { name }
    </div>
  )
}