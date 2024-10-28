import './search-box.styles.css';
const SearchBox = ({ onChangeHandler } ) => {
    <input className='search-box' type='search' placeholder='search monsters' onChange={onChangeHandler}/>
}
export default SearchBox;