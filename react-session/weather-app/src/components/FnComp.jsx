import { memo, useEffect } from "react";

function FnComp() {
  // mounting
  useEffect(() => {
    // once run once
    return () => {
      // unmounting
      // only once
    };
  }, []);

  // updating
  useEffect(() => {
    /// runs on props / state will get change
  }, [props, state]);

  return <div>FnComp</div>;
}

export default memo(FnComp);

// memo => HOC
