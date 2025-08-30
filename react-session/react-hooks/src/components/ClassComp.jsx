import { Component } from "react";
import { ProductContext } from "../context/product.context";
import { withProductContext } from "../hoc/withProductContext";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    let { count, setCount } = this.props.context;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>INC</button>
        ClassComp
      </div>
    );
  }
}

export default withProductContext(ClassComp);
