import { Button } from '@mui/material'
import styled from 'styled-components'
import trash from '../../assets/images/trash.svg'

function PrimaryButton({ children, className, onClick }) {
  return (
    <Button className={className} variant='contained' onClick={onClick}>
      {children}
    </Button>
  )
}

function SecondaryButton({ children, className, onClick }) {
  return (
    <Button className={className} variant='outlined' onClick={onClick}>
      {children}
    </Button>
  )
}

function DeleteButton({ className, onDelete }) {
  return (
    <button className={className}>
      <img src={trash} alt='trash' onClick={onDelete} />
    </button>
  )
}

const SectionDeleteButton = styled(DeleteButton)`
  && {
    border: none;
    outline: none;
    appearance: none;
    display: none;
    align-items: center;
    padding: 0.25rem;
    border-radius: 4px;
    background-color: #e0e7ff;
    border: 2px solid #715df2;
    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`

const InputDeleteButton = styled(DeleteButton)`
  && {
    border: none;
    outline: none;
    appearance: none;
    display: flex;
    align-items: center;
    position: absolute;
    top: -0.625rem;
    right: 0.5rem;
    z-index: 1;
    padding: 0.25rem;
    border-radius: 4px;
    background-color: #e0e7ff;
    border: 2px solid #715df2;
    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`

export {
  PrimaryButton,
  SecondaryButton,
  SectionDeleteButton,
  InputDeleteButton,
}
