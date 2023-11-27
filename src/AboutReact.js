import React from 'react';
import './AboutPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => { 
  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1 className="display-4">About React</h1>
      </header>
      <section>
        <h2 className="mt-4">Introduction to React</h2>
        <p>
          React is an open-source JavaScript library developed by Facebook for
          building user interfaces or UI components, particularly for
          single-page applications where UI updates are frequent and
          data-driven. It is commonly used for building modern web applications
          and is maintained by Facebook and a community of individual
          developers and companies.
        </p>
      </section>
      <section>
        <h2 className="mt-4">Key Concepts in React</h2>
        <ul>
          <li>Components: Reusable building blocks of a UI.</li>
          <li>State: Represents the current condition of the app.</li>
          <li>Props: Properties passed to a component.</li>
          <li>Virtual DOM: Efficiently updates and renders UI components.</li>
          <li>JSX: JavaScript extension syntax for easier UI development.</li>
        </ul>
      </section>
      <section>
        <h2 className="mt-4">Why Use React?</h2>
        <p>
          React simplifies the process of creating interactive user interfaces
          by breaking down the UI into reusable components. Its virtual DOM
          implementation ensures efficient updates, and its declarative syntax
          makes it easier to understand and debug code. React is widely adopted
          in the industry and has a vibrant community, making it well-supported
          and documented.
        </p>
      </section>
      <section>
        <h2 className="mt-4">Getting Started</h2>
        <p>
          To start using React, you can set up a new project using tools like
          Create React App. Explore the official React documentation and
          tutorials to learn more about its features and best practices.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
