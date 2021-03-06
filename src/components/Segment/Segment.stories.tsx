import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Header, Segment } from '../..'

storiesOf('Segment', module).add('Just a segment', () => (
  <Segment style={{ width: 400 }}>
    <Header>Title</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Segment>
))
