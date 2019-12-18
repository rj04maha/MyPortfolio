import React from "react";
import { TimelineItem } from "vertical-timeline-component-for-react";
import List from "./List";
import jobData from "../workdata.json";

const JobList = () => {
  return jobData.map(job => {
    return (
      <TimelineItem
        key={`${job.id}`}
        dateInnerStyle={{ background: "rgb(162, 196, 201)", color: "white" }}
        dateText={`${job.time}`}
        style={{ color: "rgb(162, 196, 201)" }}
      >
        <h2>{job.title}</h2>
        <h3>{job.company}</h3>
        <h5>{job.location}</h5>
        <div>
          <List arr={job.duties} />
        </div>
      </TimelineItem>
    );
  });
};

export default JobList;
