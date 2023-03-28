import React from 'react'
import { TextField } from '@mui/material'

function Profession(props) {
  const { profession, setProfession } = props
  const { professionWidth, setProfessionWidth } = props
  const { isProfessionOnEdit, setIsProfessionOnEdit } = props

  return (
    <div className='profession'>
      {isProfessionOnEdit ? (
        <div>
          <TextField
            autoFocus
            label='profession'
            value={profession}
            onChange={(event) => setProfession(event.target.value)}
            onBlur={() => setIsProfessionOnEdit(false)}
            style={{
              width: professionWidth,
            }}
          />
        </div>
      ) : (
        <div
          className='profession-container'
          tabIndex={0}
          onFocus={(event) => {
            setIsProfessionOnEdit(true)
            setProfessionWidth(event.target.offsetWidth + 50 + 'px')
          }}
          onClick={(event) => {
            setIsProfessionOnEdit(true)
            setProfessionWidth(event.target.offsetWidth + 'px')
          }}
        >
          {profession}
        </div>
      )}
    </div>
  )
}

export default Profession
