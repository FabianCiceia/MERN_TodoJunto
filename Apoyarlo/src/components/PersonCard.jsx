import { useState } from 'react';
import "./PersonCard.css"
function PersonCard(props) {

  const { firstName, lastName, age, hairColor} = props;

  const [contador, setContador] = useState(Number(age));
  const handleClick = () => {
    setContador(contador + 1);
  };



  return (
    <div className='container'>
      <div className='data'>
        <h1>{firstName}, {lastName}</h1>
        <p>Age: {contador}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
      <button className='age-button' onClick={handleClick}>Birthday Button for Jane Doe</button>
    </div>
  );
}

export default PersonCard;
