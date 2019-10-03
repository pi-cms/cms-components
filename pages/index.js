import React, { Fragment } from 'react'

import App from '../src/examples/App';
import Navigation from '../src/examples/Navigation';

const Home = () => (
  <Fragment>
    <div style={{paddingBottom: "100px"}}>
      <Navigation />
    </div>
    <div className="container">
      <App />
    </div>


    <style jsx="true" global={true}>
      {`
        body {
          background-color: #3595c9;
        }
        .container {
          width: 80%;
          margin: auto;
        }
      `}
    </style>

  </Fragment>
)

export default Home
