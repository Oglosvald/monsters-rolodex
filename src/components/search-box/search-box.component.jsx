import { Component } from "react";
import './search-box.styles.css';
class SearchBox extends Component {
    render() {
        const { onChangeHandler } = this.props;
        return (
            <input className='search-box' type='search' placeholder='search monsters' onChange={onChangeHandler}/>
        )
    }
}

export default SearchBox;