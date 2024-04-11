import React from 'react';
import { carModel } from '../../index.tsx';
import Card from '../../../../shared/components/surface/card';

import './styles.scss';

interface CardContainerProps {
  cardList: carModel[];
  openAlertModal: (id: number) => void;
  EditCard: (item: carModel) => void;
  isFetching: boolean;
  isError: boolean;
  error: any;
}

const CardContainer: React.FC<CardContainerProps> = ({ cardList, openAlertModal, EditCard, isFetching, isError, error }) => {
  return (
    <div className="card-container__container">
      {isFetching ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        cardList.map((item: carModel, index: number) => (
          <Card key={index} deleteCard={() => openAlertModal(item.id)} editCard={() => EditCard(item)} carImg={item.base64}>
            {item.name}
          </Card>
        ))
      )}
    </div>
  );
}

export default CardContainer;
