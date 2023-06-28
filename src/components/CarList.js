import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store';

function CarList() {
  const { cars, inputTerm } = useSelector(({form, cars: { data, searchTerm}}) => {
    const filteredCars = data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return {
      cars: filteredCars,
      inputTerm: form.name
    }
  });
  const dispatch = useDispatch();
  const handleCarDelete = (car) => {
    dispatch(removeCar(car?.id))
  }
  
  const renderCars = cars?.map(car => {
    const bold = inputTerm && car?.name.toLowerCase().includes(inputTerm.toLowerCase()) ;
    console.log(bold)

    return <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - Rs{car.cost} 
        </p>
        <button className='button is-danger' onClick={() => handleCarDelete(car)}>Delete</button>
      </div>
  })
  return (
    <div className='car-list'>
        {renderCars}
        <hr />
    </div>
  )
}

export default CarList