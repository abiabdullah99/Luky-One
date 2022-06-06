import React from "react";
import './Ques.css'
const Ques = () => {
  return (
    <div className="Extra-part">
      <h1>Props And State Difference</h1>
      <h3>Props</h3>
      <p>
        1. Props are used to send data and event handlers to a component's
        children.
      </p>
      <p>
        2. Props are immutable — they can't be modified after they've been set.
      </p>
      <p>
        3. Both functional and class components can benefit from the use of
        props.
      </p>
      <p>4. The parent component sets props for the children components.</p>
      <h3>State</h3>
      <p>
        1. The data of the components that must be presented to it store the
        view in the state.
      </p>
      <p>2. The data is stored in the state, which might change over time.</p>
      <p>3. Only class components can use the state.</p>
      <p>4. Event handlers are typically responsible for updating the state.</p>
      <br />
      <br />
      <h1>How UseState Works</h1>
      <p>
        If you try to understand it in general JavaScript terms, you will see it
        as a function called with a single parameter that returns a set of
        values. stored in the 'const' variable. Yeah Al that sounds pretty crap
        to me, Looks like BT aint for me either. Before you use the useState
        hook, you must know that the first value is a common variable that can
        be accessed across all elements, and the second value is a function used
        to determine the state of a component, equivalent to a setstate in a
        class component. Thus, useState hook gives us a variable and a function.
        variable and a function. Lets see what the function useState does with
        the initial value and what it returns.
      </p>
    </div>
  );
};

export default Ques;
