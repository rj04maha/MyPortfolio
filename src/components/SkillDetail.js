import React from "react";

const SkillDetail = props => {
  return (
    <div>
      <div className="ui top attached tabular menu">
        <div className="item">
          {props.category} ->
          {props.skills}
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
