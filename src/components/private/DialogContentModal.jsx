import { DialogContent } from '@mui/material'
import React from 'react'
import BusquedaDireccionModal from './BusquedaDireccionModal'
import DescripcionModal from './DescripcionModal'
import DropdownModal from './DropdownModal'
import FechaModal from './FechaModal'
import { HoraModal } from './HoraModal'
import MapModal from './MapModal'

const DialogContentModal = (
  {
    datePick,
    handleInputChange,
    fechaParche,
    horaParche,
    cupoMaximo,
    fechaFin,
    horaFin,
    categoria,
    descripcionParche,
    busquedaMapa,
    setPosition,
    position,
    direccion,
    reset,
    scroll
  }) => {
  return (
    <DialogContent dividers={scroll === 'paper'}>
      <div className='flex justify-between'>
        <FechaModal
          datePick={datePick}
          handleInputChange={handleInputChange}
          fecha={fechaParche}
          name='fechaParche'
          nombreLabel='Fecha de Inicio:'
        />

        <HoraModal
          handleInputChange={handleInputChange}
          hora={horaParche}
          name='horaParche'
          nombreLabel='Hora de Inicio:'
        />

        <div className='flex flex-col'>
          <label
            className='text-gray-600'
            htmlFor='inputCupoMaximo'
          >
            <strong>
              Cantidad de personas:
            </strong>
          </label>
          <i className='fas fa-calculator date-budget' />
          <input
            required
            id='inputCupoMaximo'
            name='cupoMaximo'
            onChange={handleInputChange}
            value={cupoMaximo}
            className='
            rounded-lg
            bg-gray-100
            px-1 pl-1'
            type='number'
          />
        </div>
      </div>

      <div className='flex justify-between mt-5'>
        <FechaModal
          datePick={datePick}
          handleInputChange={handleInputChange}
          fecha={fechaFin}
          name='fechaFin'
          nombreLabel='Fecha de Fin:'
        />

        <HoraModal
          handleInputChange={handleInputChange}
          hora={horaFin}
          name='horaFin'
          nombreLabel='Hora de Fin:'
        />

        <div className='flex'>
          <DropdownModal handleInputChange={handleInputChange} categoria={categoria} />
        </div>
      </div>

      <DescripcionModal handleInputChange={handleInputChange} descripcionParche={descripcionParche} />

      <hr className='my-6' />

      {/* Busqueda de direccion */}
      <BusquedaDireccionModal
        handleInputChange={handleInputChange}
        busquedaMapa={busquedaMapa}
        setPosition={setPosition}
        reset={reset}
      />

      {/* Mapa */}
      <MapModal setPosition={setPosition} position={position} direccion={direccion} />

      <div className='flex justify-center text-sm'>
        <span><strong>Direccion:</strong> {direccion}</span>
      </div>

    </DialogContent>
  )
}

export default DialogContentModal
