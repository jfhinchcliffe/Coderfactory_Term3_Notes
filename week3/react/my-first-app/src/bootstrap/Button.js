import React from 'react'

export default function Button({ type = 'default', children }){
  return (
    <div className={ ` btn btn-${ type }` } >
      { children }
    </div>
  )
}