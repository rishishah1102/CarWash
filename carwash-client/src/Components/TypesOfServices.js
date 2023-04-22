import React from 'react';
import '../CSS/TypesOfService.css';
import ServiceItems from './ServiceItems';
import items from '../Utils/Items';

function TypesOfServices() {

  return (
    <div className='typeOfService'>
      <h2>What we do ?</h2>
      <hr />
      <h1>Premium Washing Services</h1>
      <div className="serviceItems">
        {
          items.map((item, index) => {
            return (
              <ServiceItems item={item} key={index} />
            );
          })
        }
      </div>
    </div>
  );
};

export default TypesOfServices;
