import React from 'react';

import './spinner.css';

const Spinner = (props) => {

  const isHidden = props.hidden? '' : 'hidden'

  return (
    <div className={ `lds-css ${isHidden}`  }>
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
