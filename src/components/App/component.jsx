import React, { Component } from 'react'

import classnames from 'classnames'
import FontAwesome from 'react-fontawesome';

import './style.css'

export default class App extends Component {
  render () {
    return (
      <div className='site'>
        <div className='info-block'>
          <span className={classnames(['info', 'name'])}>Adam Bowles</span>
          <span className={classnames(['info', 'job'])}>Front End Web Developer</span>
          <div className={classnames(['info', 'links'])}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.github.com/adambowles/'
              className='link'
              title='Github'
            >
              <FontAwesome name='github-square' fixedWidth />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.twitter.com/adambowles'
              className='link'
              title='Twitter'
            >
              <FontAwesome name='twitter-square' fixedWidth />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/adambowles/'
              className='link'
              title='LinkedIn'
            >
              <FontAwesome name='linkedin-square' fixedWidth />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:website@adambowl.es'
              className='link'
              title='Send me an email'
            >
              <FontAwesome name='envelope-square' fixedWidth />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
