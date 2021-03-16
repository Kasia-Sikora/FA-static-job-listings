import React from "react";
import styles from "./Content.module.scss";
import ListItem from "./ListItem";

const List = ({ filteredJobs, searchAttrHandler}) => {
  
  return (
    <div className={styles.list}>
      {filteredJobs.map((job) => (
        <ListItem
          key={job.id}
          job={job}
          searchAttrHandler={searchAttrHandler}
        />
      ))}
    </div>
  );
};

export default List;
