import React from 'react';
import './styles.scss';
import SearchField from '../../inputs/SearchField';

interface SearchContainerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setSearchTerm: (term: string) => void;
}

const SearchContainer = ({ onSubmit, setSearchTerm }: SearchContainerProps) => {
  return(
    <form className="impar-search-container__container" onSubmit={onSubmit}>
      <SearchField setSearchTerm={setSearchTerm}/>
    </form>
  );
}

export default SearchContainer;
