
import React from 'react'

export default function Form({ label = 'label' }){
  return (
    <div className="form-group">
      <label for={label}>{label} form: </label>
      <input type="text" class="form-control" id="`{label}`" />
    </div>
  )
}
