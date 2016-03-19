import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import YTAPI from './config/youtube_api';
import SearchBar from './components/search_bar';

YTSearch({ key: YTAPI.key, term: 'surfboards' }, (data) => {
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
