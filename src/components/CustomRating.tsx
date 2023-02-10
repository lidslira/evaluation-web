'use strict';

/* External libraries */
import React, { useEffect, useState } from 'react';

/* Internal libraries */
import starFull from '../assets/img/estrela_cheia.svg';
import starEmpty from '../assets/img/estrela_vazia.svg';

interface Props {
  onSelected: (arg: number) => void
  evaluation: number
}

export const CustomRating: React.FC<Props> = props => {
  const [starSelected, setStarSelected] = useState<number>(0)

  const getClassStar = (index: number): string => {
    return index > starSelected ? starEmpty : starFull
  }
  const size = 35;
  
  const handleClickStar = (value: number) => {
    setStarSelected(value)
    props.onSelected(value)
  }

  useEffect(() => {
    setStarSelected(props.evaluation)
  }, [props.evaluation])

  return(
    <div
      style={{
        marginTop: 30,
        marginBottom: 70,
        flexDirection: 'row',
      }}
    >
      <img onClick={() => handleClickStar(1)} src={getClassStar(1)} style={{height: size, width: size }} />
      <img onClick={() => handleClickStar(2)} src={getClassStar(2)} style={{height: size, width: size }} />
      <img onClick={() => handleClickStar(3)} src={getClassStar(3)} style={{height: size, width: size }} />
      <img onClick={() => handleClickStar(4)} src={getClassStar(4)} style={{height: size, width: size }} />
      <img onClick={() => handleClickStar(5)} src={getClassStar(5)} style={{height: size, width: size }} />
    </div>
  );
};
