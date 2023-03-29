import { TextField, Fab, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import CheckIcon from '@mui/icons-material/Check'
import React, { useState } from 'react'
import uniqid from 'uniqid'

function Links() {
  const defaultLinks = [
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
  ]
  const [links, setLinks] = useState(defaultLinks)
  const [areLinksOnEdit, setAreLinksOnEdit] = useState(false)

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
    setAreLinksOnEdit(!areLinksOnEdit)
    deleteEmptyLinks()
    !links.length && setLinks(defaultLinks)
  }

  function deleteEmptyLinks() {
    setLinks((prevLinks) =>
      prevLinks.filter((link) => {
        return link.url && link.placeholder && link.id
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
  return (
    <div className='links'>
      {areLinksOnEdit ? (
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
              <TextField
                label='Full URL or Email'
                defaultValue={link.url}
                onChange={(e) => handleUrlChange(e, link.id)}
              />
              <TextField
                label='Placeholder'
                defaultValue={link.placeholder}
                onChange={(e) => handlePlaceholderChange(e, link.id)}
              />
              <Button onClick={() => handleLinkDelete(link.id)}>
                <DeleteIcon />
              </Button>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button size='small' aria-label='add' onClick={handleLinkAdd}>
              <AddIcon />
            </Button>
            <Button
              size='small'
              aria-label='toggle visibility'
              onClick={toggleEditMode}
            >
              <VisibilityOffIcon />
            </Button>
          </div>
        </div>
      ) : (
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
              <a
                href={urlOrMail(link.url)}
                target='_blank'
                rel='noreferrer'
                onClick={handleClick}
              >
                {link.placeholder}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Links
