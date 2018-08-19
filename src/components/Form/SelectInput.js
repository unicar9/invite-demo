import React from 'react'
import { Form, Dropdown, Message } from 'semantic-ui-react'

const SelectInput = ({ input, label, type, options, meta: { touched, error, warning } }) => (
  <Form.Field required width={8}>
    <label>{label}</label>
    <Dropdown
      {...input}
      value={input.value}
      onChange={(event, data) => input.onChange(data.value)}
      placeholder={label}
      options={options}
      type={type}
      selection
    />
    {touched && ((error && <Message size='tiny' negative>{error}</Message>) || (warning && <span>{warning}</span>))}
  </Form.Field>
)

export default SelectInput
