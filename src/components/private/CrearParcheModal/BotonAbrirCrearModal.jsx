import React from 'react'
import { FaPlus } from 'react-icons/fa'

const BotonAbrirCrearModal = ({ handleClickOpen }) => {
  return (
    <div className='flex justify-end m-5'>
      <button
        onClick={handleClickOpen('paper')}
        className='
    rounded-full
    bg-yellow-500
    p-3
    '
      >
        <span
          className='
      cursor-pointer
      text-xl
      text-black'
        >
          <FaPlus />
        </span>
      </button>
    </div>
  )
}

export default BotonAbrirCrearModal
