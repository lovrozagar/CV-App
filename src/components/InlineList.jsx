function InlineList({ skills }) {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: '1.6rem',
          justifyContent: 'center',
        }}
      >
        {skills.map((skill) => {
          return <li style={{}}>{skill}</li>
        })}
      </ul>
    </div>
  )
}

export default InlineList
