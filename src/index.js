import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import { youtubeKey } from './keys';

//   Create a new component.
//   This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and
// put it on the page (in the DOM)
// wrap in jsx tags to make a component
ReactDOM.render(<App />, document.querySelector('.container'));
