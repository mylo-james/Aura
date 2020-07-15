import React from 'react';
import PropTypes from 'prop-types';

const Nav = () => {
  return (
    <nav>
        <button
          onClick={() => {
            setSide("feed");
          }}
        >
          Feed
        </button>
        <button
          onClick={() => {
            setSide("stats");
          }}
        >
          Stats
        </button>
        <button
          onClick={() => {
            setSide("blogs");
          }}
        >
          Blogs
        </button>
        <button
          onClick={() => {
            setSide("account");
          }}
        >
          Account
        </button>
      </nav>
  );
};

Nav.propTypes = {};

export default Nav;