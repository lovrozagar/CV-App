import React from 'react'

function Section({ name, children }) {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <h3>{name}</h3>
        <span
          style={{
            borderBottom: '1px solid black',
            margin: '0 4px 4px 4px',
          }}
        ></span>
      </div>
      {children}
    </div>
  )
}

export default Section
