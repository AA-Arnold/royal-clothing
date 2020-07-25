import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
// import './App.css';

const h = (props) => {
  console.log(props)
  return <div>hi {props.match.params.topic}</div>
}

const App = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/heeu/:topic' component={h} />
      </Switch>
    </React.Fragment>

  )
}
export default App;
