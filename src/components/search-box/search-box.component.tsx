import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHanlder: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onChangeHanlder}: SearchBoxProps) => {
  return (
    <input 
      className={'search-box ' + className}
      type='search' 
      placeholder={placeholder}
      onChange={onChangeHanlder} 
    />
  )
}

export default SearchBox;