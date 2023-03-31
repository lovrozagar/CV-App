import { Box, Container } from '@mui/material'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  && {
    padding: 1em;
    border: none;
    border-radius: 4px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23715DF2CC' stroke-width='4' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    &:hover,
    &:focus {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23715DF2FF' stroke-width='4' stroke-dasharray='0' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }
    @media print {
      & {
        padding: 0;
        border: none;
        background-image: none;
      }
    }
  }
`

const StyledContainer = styled(Container)`
  && {
    padding: 1em;
    border: none;
    border-radius: 4px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23715DF2CC' stroke-width='4' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    &:hover,
    &:focus {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23715DF2FF' stroke-width='4' stroke-dasharray='0' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }
    @media print {
      & {
        padding: 0;
        border: none;
        background-image: none;
      }
    }
  }
`

export { StyledBox, StyledContainer }
