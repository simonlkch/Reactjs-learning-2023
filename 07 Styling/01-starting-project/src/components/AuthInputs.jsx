import { useState } from 'react';
import Input from './Input.jsx'
import Button from './Button.jsx'

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <Input label="Email"
          invalid={emailNotValid ? 'invalid' : undefined}
          onChange={(event) => handleInputChange('email', event.target.value)} />
        <Input label="Password"
          invalid={passwordNotValid ? 'invalid' : undefined}
          onChange={(event) => handleInputChange('password', event.target.value)} />

      </div>
      <div className="actions">
        <Button type="button" className="text-button">
          Create a new account
        </Button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
