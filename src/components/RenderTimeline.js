import React from "react";
import { Timeline } from "vertical-timeline-component-for-react";
import JobList from "./JobList";

const RenderTimeline = props => {
  return (
    <Timeline lineColor={"rgb(162, 196, 201)"}>
      <JobList />
    </Timeline>
  );
};

export default RenderTimeline;
