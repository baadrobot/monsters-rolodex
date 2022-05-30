import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHanlder}) => {
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