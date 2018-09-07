import React from 'react';
import { Link } from 'react-router-dom';

const UserForm = props => {
  const { submit, change, state } = props;
  return (
    <form onSubmit={submit}>
      <label htmlFor="name">Name:</label>
      <input name="name" value={state.name} onChange={change} />
      <label>Save:</label>
      <button type="submit" disabled={!state.name}>
        Create
      </button>
    </form>
  );
};

export default UserForm;
