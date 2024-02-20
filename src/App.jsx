import React, { useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Отправленные данные:', userData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
