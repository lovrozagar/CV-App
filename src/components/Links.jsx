import { TextField } from '@mui/material'
import React from 'react'

function Links(props) {
  const { links, setLinks, areLinksOnEdit, setAreLinksOnEdit } = props

  function urlOrMail(input) {
    const regex = /^\S+@\S+\.\S+$/ // guess if link is mail
    const isEmail = regex.test(input)

    return isEmail ? `mailto:${input}` : input
  }

  return (
    <div className='links'>
      {areLinksOnEdit ? (
        <div
          style={{
            width: '100%',
          }}
        >
          <TextField
            value={links}
            label='Links, full URL + optional placeholder, comma separated, example: github.com/user/ninja GitHub, ninja@gmail.com'
            onChange={(e) => setLinks(e.target.value)}
            onBlur={() => setAreLinksOnEdit(!areLinksOnEdit)}
            sx={{
              width: '100%',
            }}
          />
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
          {links.split(',').map((link, index) => {
            const [linkItem, placeholderItem] = link.trim('').split(' ')
            return (
              <a
                key={index}
                className='link'
                href={urlOrMail(linkItem)}
                rel='noreferrer'
                target='_blank'
                onClick={(e) => {
                  setAreLinksOnEdit(!areLinksOnEdit)
                }}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {placeholderItem ? placeholderItem : linkItem}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Links
