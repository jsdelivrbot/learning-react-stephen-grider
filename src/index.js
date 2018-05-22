import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCajfSCGYTYob_AjYlx08s0466j8KJOrC0';

const App = () => {
  render(
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<SearchBar />, document.querySelector('.container'));