import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Center } from '../..'
import './Center.stories.css'

storiesOf('Center', module)
  .add('On Parent', () => (
    <>
      <div className="story container" />
      <div className="story container">
        <Center>
          <span className="story hello">Hello</span>
        </Center>
      </div>
    </>
  ))
  .add('On Screen', () => (
    <>
      <div className="story container" />
      <div className="story container">
        <Center screen>
          <span className="story hello">Hello</span>
        </Center>
      </div>
    </>
  ))
