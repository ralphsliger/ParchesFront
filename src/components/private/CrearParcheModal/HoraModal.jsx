import React from 'react'

export const HoraModal = ({ handleInputChange, hora, name, nombreLabel }) => {
  return (
    <div className='flex flex-col'>
      <label
        className='text-gray-600'
        htmlFor='inputHora'
      >
        <strong>
          {nombreLabel}
        </strong>
      </label>
      <i className='fas fa-calculator date-budget' />
      <input
        required
        id='inputHora'
        name={name}
        onChange={handleInputChange}
        value={hora}
        className='
        rounded-lg
        bg-gray-100
        px-1 pl-1'
        type='time'
      />
    </div>
  )
}
