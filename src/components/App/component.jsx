import React, { Component } from 'react'

import './style.css'

export default class App extends Component {
  render () {
    return (
      <div className='site'>
        <section className='intro'>
          <div className='text'>
            <h1>Adam Bowles</h1>
            <h1>Front End Web Developer</h1>
          </div>
          <div className='scroll'>
            something goes down here
          </div>
        </section>

        {/* <section className='body'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </section> */}
      </div>
    )
  }
}
