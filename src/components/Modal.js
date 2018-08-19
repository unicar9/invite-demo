import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class InviteModal extends Component {
  render () {
    return (
      <Modal dimmer='blurring' trigger={<Button icon labelPosition='left' inverted><Icon name='add user' />Invite</Button>}>
        <Modal.Header>Invite New Member</Modal.Header>
        <Modal.Content scrolling>
          {this.props.children}
        </Modal.Content>
      </Modal>
    )
  }
}

InviteModal.propTypes = {
  children: PropTypes.element
}

export default InviteModal
