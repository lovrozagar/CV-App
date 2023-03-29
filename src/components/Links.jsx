// FUNCTIONALITY
import React, { useEffect, useMemo, useState } from 'react'
import uniqid from 'uniqid'
// MUI
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { StyledButton } from './styled/StyledButtons'
import { StyledInput } from './styled/styledInputs'
import { StyledLink } from './styled/styledLinks'
// ASSETS
import chain from '../images/chain.svg'

function Links() {
  const defaultLinks = useMemo(
    () => [
      {
        url: 'ninja@ninjamail.com',
        placeholder: 'NinjaMail',
        id: uniqid(),
      },
      {
        url: 'https://github.com/lovrozagar',
        placeholder: 'NinjaGitHub',
        id: uniqid(),
      },
      {
        url: 'https://www.linkedin.com/in/lovrozagar/',
        placeholder: 'NinjaLinkedIn',
        id: uniqid(),
      },
    ],
    []
  )
  const [links, setLinks] = useState(defaultLinks)
  const [areLinksOnEdit, setAreLinksOnEdit] = useState(false)

  useEffect(() => {
    if (links.length === 0) {
      setLinks(defaultLinks)
    }
  }, [links, defaultLinks])

  function urlOrMail(input) {
    const regex = /^\S+@\S+\.\S+$/ // guess if link is mail
    const isEmail = regex.test(input)

    return isEmail ? `mailto:${input}` : input
  }

  function handleClick(e) {
    if (!e.ctrlKey) {
      e.preventDefault()
      setAreLinksOnEdit(!areLinksOnEdit)
    }
  }

  function toggleEditMode() {
    deleteEmptyLinks()
    setAreLinksOnEdit(!areLinksOnEdit)
  }

  function deleteEmptyLinks() {
    setLinks((prevLinks) =>
      prevLinks.filter((link) => {
        return (
          link.url.trim() !== '' && link.placeholder.trim() !== '' && link.id
        )
      })
    )
  }

  function handleUrlChange(e, linkId) {
    setLinks((links) =>
      links.map((link) => {
        return link.id === linkId ? { ...link, url: e.target.value } : link
      })
    )
  }

  function handlePlaceholderChange(e, linkId) {
    setLinks((links) =>
      links.map((link) => {
        return link.id === linkId
          ? { ...link, placeholder: e.target.value }
          : link
      })
    )
  }

  function handleLinkDelete(linkId) {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== linkId))
  }

  function handleLinkAdd() {
    setLinks((links) => [...links, { url: '', placeholder: '', id: uniqid() }])
    console.log(links)
  }

  function LinksInput() {
    return (
      <div style={{ display: 'grid', gap: '1rem' }}>
        <p>Slicing... Links</p>
        {links.map((link) => (
          <div
            key={link.id}
            style={{
              display: 'grid',
              gap: '0.5rem',
              gridTemplateColumns: '1fr auto auto',
            }}
          >
            <StyledInput
              label='Full URL or Email'
              defaultValue={link.url}
              onChange={(e) => handleUrlChange(e, link.id)}
            />
            <StyledInput
              label='Placeholder'
              defaultValue={link.placeholder}
              onChange={(e) => handlePlaceholderChange(e, link.id)}
            />
            <StyledButton onClick={() => handleLinkDelete(link.id)}>
              <DeleteIcon />
            </StyledButton>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <StyledButton size='small' aria-label='add' onClick={handleLinkAdd}>
            <AddIcon />
          </StyledButton>
          <StyledButton
            size='small'
            aria-label='toggle visibility'
            onClick={toggleEditMode}
          >
            <VisibilityOffIcon />
          </StyledButton>
        </div>
      </div>
    )
  }

  function LinksView() {
    return (
      <div
        className='link-container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {links.map((link) => {
          return (
            <StyledLink
              className='link'
              key={link.id}
              href={urlOrMail(link.url)}
              target='_blank'
              rel='noreferrer'
              onClick={handleClick}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={chain}
                alt=''
                style={{
                  height: '50%%',
                  paddingRight: '0.25rem',
                }}
              />
              {link.placeholder}
            </StyledLink>
          )
        })}
      </div>
    )
  }

  return (
    <div className='links'>
      {areLinksOnEdit ? <LinksInput /> : <LinksView />}
    </div>
  )
}

export default Links
