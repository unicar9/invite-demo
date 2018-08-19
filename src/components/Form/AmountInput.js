import React from 'react'
import { Form, Label, Input, Message } from 'semantic-ui-react'

const AmountInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <Form.Field required width={8}>
    <label>{label}</label>
    <Input labelPosition='left' type={type} placeholder='Amount'>
      <Label basic>$</Label>
      <input {...input} />
    </Input>
    {touched && ((error && <Message size='tiny' negative>{error}</Message>) || (warning && <span>{warning}</span>))}
  </Form.Field>
)

export default AmountInput
