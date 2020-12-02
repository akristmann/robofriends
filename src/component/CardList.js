import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  if(true) {
    throw new Error('Noooo');
  }
  return (
    <>
      {
        robots.map(robot => {
          return <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email} />
        })
      }
    </>
  );
}

export default CardList;

