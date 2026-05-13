import React, { useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function SwitchList({ list, state }) {
  const nodeRef = useRef(null);

  return (
    <div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={state}
          nodeRef={nodeRef}
          timeout={300}
          classNames="fade"
        >
          <div ref={nodeRef} className="button-container">
            {list.map((item, index) => {
              return index == state && <div key={index}>{item}</div>;
            })}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
