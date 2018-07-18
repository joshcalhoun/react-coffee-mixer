import { connectModal } from 'redux-modal'
import { branch, renderNothing } from 'recompose'
import { compose } from 'redux'

const withHiddenState = branch(
  ({ show }) => !show,
  renderNothing
)

export default params => compose(
  connectModal(params),
  withHiddenState
)
