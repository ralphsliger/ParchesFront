import { DialogTitle } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DialogTittleModal = ({ handleInputChange, nombreParche, fotoPerfil, nombreUsuario }) => {
  return (
    <DialogTitle id='scroll-dialog-title'>

      <Box>
        <div className='flex justify-between mt-3'>
          <div>

            <label
              className='
            text-gray-600'
              htmlFor='nombreParche'
            >
              Nombre del parche:
            </label>
            <input
              required
              id='inputNombreParche'
              name='nombreParche'
              onChange={handleInputChange}
              value={nombreParche}
              className='
            w-full
            rounded-lg
            bg-gray-100
            px-3'
              type='text'
            />
          </div>

          {/* Info de usuario traido de firebase auth QUEMADO */}
          <div className='flex self-center mx-2'>
            <div className='flex space-x-4 ml-3'>
              <img
                src={fotoPerfil}
                className='rounded-full w-14 h-14'
                alt='fotoPerfil'
              />
              <div className='flex flex-col'>
                <span className='font-semibold text-sm'>{nombreUsuario}</span>
              </div>
            </div>
          </div>

        </div>

      </Box>
    </DialogTitle>
  )
}

export default DialogTittleModal
