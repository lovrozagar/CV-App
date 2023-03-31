import { TextField } from '@mui/material'
import styled from 'styled-components'

const StyledInput = styled(TextField)`
  && {
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: #000000;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #000000;
    }
    &:focus-within {
      label {
        color: #000000;
      }
    }
  }
`

export { StyledInput }
