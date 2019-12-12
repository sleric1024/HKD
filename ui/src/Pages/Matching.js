import React, { useEffect } from 'react';
import '../static/css/Matching.css';


function Matching (props) {

  useEffect(() => {
    setTimeout(() => {
      props.history.push('/suggestion');
    }, 3000);
  },[]);

  return (
    <div className="matching">
      <div class="loader">
        <span>Matching...</span>
      </div>
    </div>
  );
}

export default Matching;
