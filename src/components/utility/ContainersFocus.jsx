import { Box } from '@mui/material'

function BoxFocus({ children, className, onClick }) {
  function handleEnterPress(e) {
    if (e.code === 'Enter') onClick()
  }

  return (
    <Box
      className={className}
      tabIndex='0'
      onClick={onClick}
      onKeyDown={handleEnterPress}
    >
      {children}
    </Box>
  )
}

export { BoxFocus }
