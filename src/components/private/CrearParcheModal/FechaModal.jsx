import React from 'react'

const FechaModal = ({ datePick, handleInputChange, fecha, name, nombreLabel }) => {
  return (
    <div className='flex flex-col'>
      <label
        className='text-gray-600'
        htmlFor='inputFecha'
      >
        <strong>
          {nombreLabel}
        </strong>
      </label>
      <input
        required
        id='inputFecha'
        name={name}
        onChange={handleInputChange}
        value={fecha}
        className='
        rounded-lg
        bg-gray-100
        px-1'
        type='date'
        min={datePick}
      />
    </div>
  )
}

export default FechaModal
