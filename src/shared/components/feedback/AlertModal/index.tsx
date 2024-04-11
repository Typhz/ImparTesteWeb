import IconTrash from '../../../../assets/icons/trash.svg';
import Button from '../../inputs/Button';
import './styles.scss';

interface AlertModalProps {
  alertModal: boolean;
  closeAlertModal: () => void;
  DeleteCard: (carId: number | undefined) => void;
  carId: number | undefined;
}

const AlertModal = ({alertModal, closeAlertModal, DeleteCard, carId}: AlertModalProps) => {
  return (
    <div onClick={closeAlertModal} className={`alert-modal__container ${alertModal ? 'active' : ''}`}>
      <div className="alert-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="alert-modal-icon__container">
          <img src={IconTrash} alt="icon trash"/>
        </div>
        <h2>Excluir</h2>
        <h3>CERTEZA QUE DESEJA EXCLUIR?</h3>
        <hr/>
        <div className="alert-modal__footer">
          <Button color="error" onClick={() => DeleteCard(carId)}>Excluir</Button>
          <Button variant="outlined" color="error" onClick={closeAlertModal}>Cancelar</Button>
        </div>
      </div>
    </div>
  )
}

export default AlertModal;
