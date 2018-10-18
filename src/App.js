
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';





const App = () => (

    <Router>
        <div className="App">
            <Header>
                <Link to="/" className="logo_link">
                    <div className="logo">
                        <h1>NET</h1>
                        <h1>MOVIES</h1>
                    </div>
                </Link>
            </Header>
            <Switch>
                <Route exact path="/" component={MoviesList} />
                <Route path="/:id" component={MovieDetail} />
            </Switch>
        </div>
    </Router>
);

export default App;

const Header = styled.div`
background: #0F2027;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 120px;
  padding: 20px;
  color: white;
`;

