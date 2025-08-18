import { forwardRef, useImperativeHandle, useRef } from "react";

function InputComp(props, ref) {
  let inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return inputRef.current.value;
      },
    };
  });
  return <input type="text" ref={inputRef} />;
}

export default forwardRef(InputComp);
