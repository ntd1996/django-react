import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from './containers/Layout';

import ArticleList from './components/Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <ArticleList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
