import React, { Component } from 'react'
import { Form, Message } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { propTypes } from 'redux-form'

import 'react-datepicker/dist/react-datepicker.css'

class ActiveDatePicker extends Component {
  render () {
    const { input, type, label, meta: { touched, error, warning } } = this.props
    return (
      <Form.Field required width={8}>
        <label>{label}</label>
        <DatePicker
          {...input}
          selected={input.value !== '' ? moment(input.value, 'DD/MM/YYYY') : null}
          onChange={(date) => {
            input.onChange(date.format('DD/MM/YYYY'))
          }}
          dateFormat="DD/MM/YYYY"
          placeholder={label}
          type={type}
          minDate={moment()}
          todayButton={'Today'}
        />
        {touched && ((error && <Message size='tiny' negative>{error}</Message>) || (warning && <span>{warning}</span>))}
      </Form.Field>

    )
  }
}

ActiveDatePicker.propsTypes = {
  ...propTypes
}

export default ActiveDatePicker
