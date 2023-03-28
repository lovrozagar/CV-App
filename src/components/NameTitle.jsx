import React from 'react'
import { TextField } from '@mui/material'

function NameTitle(props) {
  const { currentName, firstOrLast, width, isOnEdit } = props
  const { handleValueChange, handleBlur, handleEdit } = props

  return (
    <div>
      {isOnEdit ? (
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
            height: '1rem',
            width: width,
          }}
        />
      ) : (
        <h2
          className={`name ${firstOrLast}-name`}
          tabIndex={0}
          onFocus={(event) => handleEdit(event, `${firstOrLast}`)}
          onClick={(event) => handleEdit(event, `${firstOrLast}`)}
        >
          {currentName}
        </h2>
      )}
    </div>
  )
}

export default NameTitle
