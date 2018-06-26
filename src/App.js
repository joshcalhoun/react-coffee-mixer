import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Root from './components/Root'

const App = ({ store, history }) =>
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
          <Root/>
    </ConnectedRouter>
  </Provider>

export default App;
