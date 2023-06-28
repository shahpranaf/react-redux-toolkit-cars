import React from 'react'
import { useSelector } from 'react-redux'

function CarValue() {
  const totalValue = useSelector(({cars: {data, searchTerm} } ) => {
    return data
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((total, car) => total + car.cost, 0)
   })

  return (
    <div className='car-value'>
      Total Cost: Rs.{totalValue}
    </div>
  )
}

export default CarValue