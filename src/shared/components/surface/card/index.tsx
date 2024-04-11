import React from 'react';
import './styles.scss';
import IconTrash from '../../../../assets/icons/trash.svg';
import IconEdit from '../../../../assets/icons/edit.svg';

export interface CardProps {
  children: React.ReactNode;
  deleteCard: () => void;
  editCard: () => void;
  carImg: string;
}

const Card = ({children, deleteCard, editCard, carImg, ...rest}: CardProps) => {
  return (
    <div className="card-content__container" {...rest}>
      <div className="card-content__content">
        <div className="card-content__icon">
          <img src={'data:image/png;base64, '+carImg} alt="icon hand"/>
        </div>
        <hr />
        <div className="card-content__title">
          {children}
        </div>
      </div>
      <div className="card-content__footer">
        <button className="button-card-delete__container" onClick={deleteCard}>
          <img src={IconTrash} alt="icon hand"/>
          Excluir
        </button>
        <hr />
        <button className="button-card-edit__container" onClick={editCard}>
          <img src={IconEdit} alt="icon hand"/>
          Editar
        </button>
      </div>
    </div>
  );
}

export default Card;
