import React from 'react';
import '../CSS/ServiceItems.css';

function ServiceItems({item}) {
  return (
    <span className='serviceItem'>
        <img src={item.url} alt="Item" />
        <h3>{item.heading}</h3>
        <p>{item.desc}</p>
    </span>
  );
};

export default ServiceItems;
