import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const Alert = props => {
  const actions = [
    <FlatButton key label="OK" primary={true} onClick={props.handleClose} />
  ]

  return (
    <Dialog
      title="Insufficient Points"
      actions={actions}
      modal={false}
      open={props.open}
      onRequestClose={props.handleClose}
    >
      Please add points.
    </Dialog>
  )
}

export default Alert
