import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <ul>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
