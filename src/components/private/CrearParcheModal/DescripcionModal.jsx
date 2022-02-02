import React from 'react'

const DescripcionModal = ({ handleInputChange, descripcionParche }) => {
  return (
    <textarea
      required
      id='inputDescripcionParche'
      name='descripcionParche'
      onChange={handleInputChange}
      value={descripcionParche}
      className='
        w-full
        mt-4
        pl-2 pt-2
        text-sm
        rounded-md
      bg-gray-100'
      placeholder='¡Describe tu parche!'
      rows='7'
      cols='75'
    />
  )
}

export default DescripcionModal
