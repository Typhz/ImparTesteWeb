import Header from '../../shared/components/layout/Header';
import SearchContainer from '../../shared/components/layout/SearchContainer';
import React from 'react';
import Button from '../../shared/components/inputs/Button';
import Pagination from '../../shared/components/navigation/Paginator';
import AlertModal from '../../shared/components/feedback/AlertModal';
import Drawer from '../../shared/components/navigation/Drawer';
import CardContainer from './components/CardContainer';
import {useHome} from './hooks/useHome.ts';
import './styles.scss';

export interface carModel {
  id: number;
  name: string;
  base64: string;
}

function Home() {
  const {
    closeAlertModal,
    setPage,
    sidebarOpened,
    carId,
    alertModal,
    DeleteCard,
    EditCard,
    error,
    setSearchTerm,
    openSidebar,
    openAlertModal,
    cardList,
    page,
    closeSidebar,
    handleSubmit,
    onSubmit,
    register,
    isFetching,
    onSubmitSearchTerm,
    isError,
    errors
  } = useHome();

  return (
    <main>
      <Header />
      <SearchContainer setSearchTerm={setSearchTerm} onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmitSearchTerm(e)}/>

      <section className="card-section__container">
        <div className="card-section__header">
          <h2>Resultados de busca</h2>
          <Button variant="contained" onClick={openSidebar}>Novo Card</Button>
        </div>

        <CardContainer cardList={cardList} openAlertModal={openAlertModal} EditCard={EditCard} isFetching={isFetching} isError={isError} error={error} />
        <Pagination page={page} setPage={setPage} />
      </section>

      <AlertModal alertModal={alertModal} closeAlertModal={closeAlertModal} DeleteCard={DeleteCard} carId={carId} />
      <Drawer sidebarOpened={sidebarOpened} closeSidebar={closeSidebar} onSubmit={handleSubmit(onSubmit)} register={register} handleSubmit={handleSubmit} errors={errors} />
    </main>
  );
}

export default Home;
