import React from 'react';
import Link from 'next/link';


const Nav = () => (
  <div>
    <div>
      <Link href="/home">
        <a>Home</a>
      </Link>
    </div>
    <div>
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
  </div>
);

export default Nav;
