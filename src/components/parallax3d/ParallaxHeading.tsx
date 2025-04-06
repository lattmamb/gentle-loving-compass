import React from 'react';
import { Link } from '@remix-run/react';

export default function Home() {
  return (
    <section>
      <h1>
        This is the main page.
      </h1>
      <p>
        You can start working here.
      </p>
      <Link to="/about">
        Go to about page
      </Link>
    </section>
  );
}
