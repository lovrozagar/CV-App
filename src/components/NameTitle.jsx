import React from 'react'

function NameTitle(props) {
  const { currentName, firstOrLast, handleEdit } = props

  return (
    <h2
      className={`name ${firstOrLast}-name`}
      tabIndex={0}
      onFocus={(event) => handleEdit(event, `${firstOrLast}`)}
      onClick={(event) => handleEdit(event, `${firstOrLast}`)}
    >
      {currentName}
    </h2>
  )
}

export default NameTitle
