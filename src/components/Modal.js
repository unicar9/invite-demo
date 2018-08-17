import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class InviteModal extends Component {
  render () {
    return (
      <Modal trigger={<Button>+</Button>}>
        <Modal.Header>Invite New Member</Modal.Header>
        <Modal.Content scrolling>
              Here will be a form
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
          Invite <Icon name='chevron right' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default InviteModal
