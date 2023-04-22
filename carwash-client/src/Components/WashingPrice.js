import React from 'react';
import '../CSS/WashingPrice.css';
import plans from '../Utils/Plans';
import PricePlan from './PricePlan';

function WashingPrice() {
  return (
    <div className='washingPrice'>
      <h2>Washing Plan</h2>
      <hr />
      <h1>Choose Your Plan</h1>
      <div className="plans">
        {
          plans.map((plan, index) => {
            return (
              <PricePlan plan={plan} id={index} key={index} />
            );
          })
        }
      </div>
      <div className="blankBottom" />
    </div>
  );
};

export default WashingPrice;