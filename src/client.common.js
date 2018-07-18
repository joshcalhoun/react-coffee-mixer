import React from 'react'
import App from './App'
import configureStore from './store/configureStore'
import createHistory from 'history/createBrowserHistory'
import {loadCoffees} from "./actions/coffeeActions";
import {initializeRoasts} from "./actions/roastActions";

const history = createHistory()
const store = configureStore()
store.dispatch(loadCoffees())
store.dispatch(initializeRoasts())

export default function ConfiguredApp() {
  return (
    <App store={ store } history={ history } />
  )
}
