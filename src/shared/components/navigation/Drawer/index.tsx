import IconCard from '../../../../assets/icons/logo-teste.svg';
import TextField from '../../inputs/TextField';
import FileUpload from '../../inputs/FileUpload';
import Button from '../../inputs/Button';
import './styles.scss';
import {FieldErrors, useForm} from 'react-hook-form';
import {Inputs} from '../../../../pages/Home/hooks/useHome.ts';

interface DrawerProps {
  sidebarOpened: boolean;
  closeSidebar: () => void;
  onSubmit: () => void;
  register: any;
  handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
  errors: FieldErrors<Inputs>;
}

const Drawer = ({sidebarOpened, closeSidebar, onSubmit, register, handleSubmit, errors}: DrawerProps) => {
  return (
    <aside onClick={closeSidebar} className={`sidebar__container ${sidebarOpened ? 'active' : ''}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="sidebar__content" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar__header">
          <img src={IconCard} alt="card icon"/>
          <h4>Criar card</h4>
        </div>
        <hr/>
        <div>
          <TextField label="DIGITE UM NOME PARA O CARD" placeholder="Digite o título" id="name" register={register}
                     name="name"/>
          {errors.name && <span>Campo nome é obrigatorio</span>}
          <FileUpload label="INCLUA UMA IMAGEM PARA APARECER NO CARD" id="image" register={register} name="imageFile"/>
          {errors.imageFile && <span>Campo imagem é obrigatorio</span>}
        </div>
        <hr/>
        <div>
          <Button type="submit">Criar Card</Button>
        </div>
      </form>
    </aside>
  );
}

export default Drawer;
