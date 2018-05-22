import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = '';

const App = () => {
  render(
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<SearchBar />, document.querySelector('.container'));