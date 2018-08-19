import React, { Component } from 'react'
import { Field, reduxForm, propTypes, formValueSelector } from 'redux-form'
import TextInput from './Form/TextInput'
import SelectInput from './Form/SelectInput'
import ActiveDatePicker from './Form/ActiveDatePicker'
import AmountInput from './Form/AmountInput'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import moment from 'moment'

const validate = values => {
  const errors = {}
  const phonePattern = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.phone) {
    errors.phone = 'Required'
  } else if (!phonePattern.test(values.phone) || values.phone.toString().length < 10 || isNaN(Number(values.phone))) {
    errors.phone = 'Please enter a valid Australian phone number.'
  }

  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.userType) {
    errors.userType = 'Required'
  }

  if (!values.activeDate) {
    errors.activeDate = 'Required'
  }

  if (!values.amount) {
    errors.amount = 'Required'
  } else if (isNaN(Number(values.amount))) {
    errors.amount = 'Please enter a number.'
  }

  return errors
}

class InviteFormView extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (data) {
    // eslint-disable-next-line
    console.table(data)
  }

  render () {
    const userOptions = [
      { key: '1', text: 'Admin', value: 'admin' },
      { key: '2', text: 'Accountant', value: 'accountant' },
      { key: '3', text: 'Manager', value: 'manager' },
      { key: '4', text: 'Team Member', value: 'teamMember' }
    ]

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
        <Form.Group widths='equal'>
          <Field name="email" type="email" component={TextInput} label="Email"/>
          <Field name="phone" type="text" component={TextInput} label="Phone"/>
        </Form.Group>

        <Form.Group widths='equal'>
          <Field name="firstName" type="text" component={TextInput} label="First Name"/>
          <Field name="lastName" type="text" component={TextInput} label="Last Name"/>
        </Form.Group>

        <Form.Group>
          <Field
            name="userType"
            type="select"
            component={SelectInput}
            label="User Type"
            options={userOptions}
          />
          {this.props.userType === 'teamMember' && (
            <Field
              name="amount"
              type="text"
              component={AmountInput}
              label="Allowance Amount"

            />
          )}
        </Form.Group>

        <Form.Group>
          <Field
            name="activeDate"
            component={ActiveDatePicker}
            label="Active Date"
            type="date"
          />
        </Form.Group>

        <Button color="blue" type="submit" disabled={this.props.pristine}>
          Submit
        </Button>
        <div style={{ height: 200 }}>
        </div>
      </form>

    )
  }
}

InviteFormView.propTypes = {
  ...propTypes
}

let InviteForm = reduxForm({
  form: 'inviteForm',
  validate,
  initialValues: {
    activeDate: moment().format('DD/MM/YYYY')
  }
})(InviteFormView)

const selector = formValueSelector('inviteForm')
InviteForm = connect(state => {
  const userType = selector(state, 'userType')
  return {
    userType
  }
})(InviteForm)

export default InviteForm
