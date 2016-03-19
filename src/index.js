import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import YTAPI from './config/youtube_api';
import SearchBar from './components/search_bar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: YTAPI.key, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
