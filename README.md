# react-window-event

Install

```
yarn add @catchad/react-window-event
```

Usage

```javascript
import React, { Component } from 'react';
import ReactWindowEvent from '@catchad/react-window-event';

class WindowEvent extends Component {
  handleScroll = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <ReactWindowEvent type="scroll" listener={this.handleScroll} />
      </div>
    );
  }
}

export default WindowEvent;
```
