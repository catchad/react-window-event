import { PureComponent } from 'react';

class ReactWindowEvent extends PureComponent {
  componentDidMount() {
    const { type, listener } = this.props;
    window.addEventListener(type, listener);
  }

  componentDidUpdate(prevProps) {
    const { type, listener } = this.props;
    window.removeEventListener(prevProps.type, prevProps.listener);
    window.addEventListener(type, listener);
  }

  componentWillUnmount() {
    const { type, listener } = this.props;
    window.removeEventListener(type, listener);
  }

  render() {
    return null;
  }
}

export default ReactWindowEvent;
