import React from 'react'
import App from './App'
import configureStore from './store/configureStore'
import createHistory from 'history/createBrowserHistory'
import {loadCoffees} from "./actions/coffeeActions";

const history = createHistory()
const store = configureStore()
store.dispatch(loadCoffees())

export default function ConfiguredApp() {
  return (
    <App store={ store } history={ history } />
  )
}
