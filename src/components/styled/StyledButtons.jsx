import { Button } from '@mui/material'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  && {
    color: black; // set text color to white
    background-color: #ffffff; // set background color to black
    &:hover {
      background-color: #d1d1d126;
    }
  }
`

export { StyledButton }
