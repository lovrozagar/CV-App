import React from 'react'
import { TextField } from '@mui/material'

function NameTitleEdit(props) {
  const { currentName, firstOrLast, width } = props
  const { handleValueChange, handleBlur } = props

  return (
    <div className='name-title'>
      <TextField
        autoFocus
        value={currentName}
        label={`${firstOrLast} name`}
        onBlur={() => handleBlur(`${firstOrLast}`)}
        onChange={(event) => handleValueChange(event, `${firstOrLast}`)}
        inputProps={{
          minLength: 3,
          maxLength: 10,
        }}
        sx={{
          minHeight: '3rem',
          width: width,
        }}
      />
    </div>
  )
}

export default NameTitleEdit
