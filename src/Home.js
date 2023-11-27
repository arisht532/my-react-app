import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const redirectToReactWebsite = () => {

    window.location.href = 'https://react.dev/';
  };

  return (
    <div className="container-fluid text-center">
      <header className="mt-5">
        <h1 className="display-4">Welcome to My React Website</h1>
      </header>
      <div className="react-animation">
        <span className="react-letter react-r">R</span>
        <span className="react-letter react-e">e</span>
        <span className="react-letter react-a">a</span>
        <span className="react-letter react-c">c</span>
        <span className="react-letter react-t">t</span>
      </div>
      <p className="mt-3">Explore and enjoy the world of React!</p>
      <button className="btn btn-primary my-3" onClick={redirectToReactWebsite}>
        Visit React Website
      </button>
    </div>
  );
}

export default HomePage;
