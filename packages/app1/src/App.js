import { Title, TitleWrapper } from '@myorg/comp1'
import add from '@myorg/lib1'
import React, { Component, Fragment } from 'react'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>From lib1 package</h1>
        2 + 2 = {add(2, 2)}
        <h1>From comp1 package</h1>
        <Title title="I am a Title" />
        <TitleWrapper color="green" title="I am a Title Wrapper" />
      </Fragment>
    )
  }
}

export default App
