import React from "react";
import styles from "./Content.module.scss";
import ListItem from "./ListItem";

const List = ({ filteredJobs, filterJobsHandler }) => {
  return (
    <div className={styles.list}>
      {filteredJobs.map((job) => (
        <ListItem
          key={job.id}
          job={job}
          filterJobsHandler={filterJobsHandler}
        />
      ))}
    </div>
  );
};

export default List;
