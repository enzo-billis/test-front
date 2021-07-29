import React from "react";

const DisplayLimit = (props) => {
  const onChange = (e) => {
    props.setLimit(e.target.value);
  };

  return (
    <div>
      <select onChange={onChange} value={props.limit}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default DisplayLimit;
