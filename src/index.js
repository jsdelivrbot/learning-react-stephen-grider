import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyANSfLh_-TgYGov1XexRBIR3XxAsOwEMAk';

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos }); // This only works when the key and value are the exact same "word" but React will translate this to the line below
      //this.setState( { videos: videos} )
    });
  }

  render() {
    return (
      <div>
        <SearchBar />>
      </div>
    )
  }
}

ReactDOM.render(<SearchBar />, document.querySelector('.container'));