import React, { useState, useEffect } from "react";
import styles from "./Content.module.scss";
import List from "./List";
import Search from "./Search";

const Content = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  // const [searchedAttr, setSearchedAttr] = useState([]);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const filterJobsHandler = (type, value) => {
  
  };

  return (
    <div className={styles.content}>
      <Search />
      <List filteredJobs={filteredJobs} filterJobsHandler={filterJobsHandler} />
    </div>
  );
};

export default Content;
