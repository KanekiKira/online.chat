import React, { useState } from 'react';
import styles from '../styles/Main.module.css';
import { Link } from 'react-router-dom';

const FIELDS = {
  USERNAME: "username",
  ROOM: "room",
};

const Main = () => {
  const { USERNAME, ROOM } = FIELDS;
  const [values, setValues] = useState({ [USERNAME]: '', [ROOM]: '' });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isDisabled = Object.values(values).some((value) => !value);
    if (!isDisabled) {
      window.location.href = `/chat?name=${values[USERNAME]}&room=${values[ROOM]}`;
    } else {
      console.log("Some fields are empty");
    }
  };

  return (
    <div className={styles.wrapp}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>

        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input}
              onChange={handleChange}
              value={values[USERNAME]}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="room"
              placeholder="Room"
              className={styles.input}
              onChange={handleChange}
              value={values[ROOM]}
              autoComplete="off"
              required
            />
          </div>
          <Link className={styles.group}>
          <button type="submit" className={styles.button} onClick={handleClick}>
            Sign In
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
