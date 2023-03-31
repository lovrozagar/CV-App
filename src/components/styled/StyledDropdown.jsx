import styled from 'styled-components'
import { Select, MenuItem, FormControl } from '@mui/material'

const StyledSelect = styled(Select)`
  && {
    fieldset.MuiOutlinedInput-notchedOutline {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23715DF2CC' stroke-width='3' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      border: none;
    }
    &:hover,
    &:active,
    &:focus,
    &:focus-within,
    &:focus-visible {
      fieldset.MuiOutlinedInput-notchedOutline {
        background-image: none;
        border: 2px solid #715df2;
      }
    }
  }
`

const StyledOption = styled(MenuItem)`
  && {
    &.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected {
      background-color: rgba(113, 93, 242, 0.08);
    }
  }
`

const StyledOptionDefault = styled(MenuItem)`
  && {
    display: none;

    &.selected {
      display: block;
    }
  }
`

const StyledFormControl = styled(FormControl)`
  && {
    max-width: 15rem;
    margin: 1rem 0;
    @media print {
      & * {
        display: none;
      }
    }
  }
`

export { StyledSelect, StyledOption, StyledOptionDefault, StyledFormControl }
