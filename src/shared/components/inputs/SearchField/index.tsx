import './styles.scss';
import IconLupa from '../../../../assets/icons/lupa.svg';

interface SearchFieldProps {
  setSearchTerm: (term: string) => void;
}

const SearchField = ({ setSearchTerm }: SearchFieldProps) => {
  return (
    <div className="search-field__container">
      <input
        type="text"
        placeholder="Digite aqui sua busca"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>
        <img src={IconLupa} alt="icon lupa"/>
      </button>
    </div>
  );
}

export default SearchField;
