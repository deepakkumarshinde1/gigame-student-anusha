import { Component, PureComponent } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  static getDerivedStateFromProps(newProps, oldState) {
    return {
      ...newProps,
    };
  }

  // mounting
  componentDidMount() {
    // once run once
  }

  // updating
  componentDidUpdate() {
    /// runs on props / state will get change
  }

  // check wether to render a comp on update
  shouldComponentUpdate(newProps, newState) {
    if (newState.count === 10) {
      return false;
    }
    return true;
  }

  // unmounting
  componentWillUnmount() {
    // only once
  }

  render() {
    return <div>ClassComp</div>;
  }
}

export default ClassComp;
