import add from '@myorg/lib1'
import React, { Component, Fragment } from 'react'

import Title from 'components/Title'
import TitleWrapper from 'components/TitleWrapper'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>From lib1 package</h1>
        2 + 2 = {add(2, 2)}
        <h1>From this package</h1>
        <Title title="I am a Title" />
        <TitleWrapper color="green" title="I am a TitleWrapper" />
      </Fragment>
    )
  }
}

export default App
