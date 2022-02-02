import React from 'react'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'


export default function Footer () {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }} style={{ boxShadow: '0px 2px 5px #888, 0px -2px 5px #888' }}>
      <div className='footer flex flex-col'>
        <Toolbar>
          <Box sx={{ mx: 'auto' }}>
            <Link id='botonGitHubFooter' href='https://github.com/SofkaU2021-4/ParchesFront' target='_blank' rel='noreferrer'>
              <IconButton arial-label='git-hub' color='primary'>
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link id='botonLinkedInFooter' href='https://co.linkedin.com/company/sofka-technologies' target='_blank' rel='noreferrer'>
              <IconButton arial-label='linkedin' color='primary'>
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link id='botonFacebookFooter' href='https://www.facebook.com/sofkatech' target='_blank' rel='noreferrer'>
              <IconButton arial-label='facebook' color='primary'>
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link id='botonInstagramFooter' href='https://www.instagram.com/sofka_technologies' target='_blank' rel='noreferrer'>
              <IconButton arial-label='instagram' color='primary'>
                <InstagramIcon />
              </IconButton>
            </Link>
            <Link id='botonYouTubeFooter' href='https://www.youtube.com/watch?v=sAMMpZDKygE' target='_blank' rel='noreferrer'>
              <IconButton arial-label='youtube' color='primary'>
                <YouTubeIcon />
              </IconButton>
            </Link>
            <hr style={{ border: '1px solid #140d4fff' }} />
          </Box>
        </Toolbar>

        <Typography variant='caption' textAlign='center' sx={{ pb: 1, color: '#140d4fff' }}>
          Todos los derechos reservados SofkaU &copy; {new Date().getFullYear()}
        </Typography>

      </div>
    </Box>
  )
}
