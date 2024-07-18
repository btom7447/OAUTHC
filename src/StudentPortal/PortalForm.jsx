
import React from 'react';

const PortalForm = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function to submit the email address here
    console.log(`Email address submitted: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className='student-portal-form'>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email address'
      />
      <br />
      <button type="submit">Invite Me</button>
    </form>
  );
};

export default PortalForm;
