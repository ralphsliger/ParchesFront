import { OpenStreetMapProvider } from 'leaflet-geosearch'
import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'

const BusquedaDireccionModal = ({ handleInputChange, busquedaMapa, setPosition, reset }) => {
  const provider = new OpenStreetMapProvider()

  const handleEviarBusqueda = () => {
    provider.search({ query: busquedaMapa })
      .then(log => (
        setPosition({ lat: log[0].bounds[0][0], lng: log[0].bounds[0][1] })))
      .catch(e => console.log(e))
    reset()
  }
  return (
    <div className='flex justify-center'>
      <div className='flex'>
        <label
          className='
      text-gray-600'
          htmlFor='nombreParche'
        >
          <strong>
            Ubica tu parche:
          </strong>
        </label>
        <input
          id='inputBusqueda'
          name='busquedaMapa'
          onChange={handleInputChange}
          className='
        ml-1
        rounded-lg
        bg-gray-100
        px-3'
          type='text'
          value={busquedaMapa}
        />
        <div className='ml-1'>
          <button
            onClick={handleEviarBusqueda}
            className='
          px-2 py-1
          text-white
          bg-blue-900
          hover:bg-blue-800
          filled-button
          border
          rounded'
            type='button'
          >
            <FaSearchLocation />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BusquedaDireccionModal
