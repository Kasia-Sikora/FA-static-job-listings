import React, { useState, useEffect } from "react";
import styles from "./Content.module.scss";
import List from "./List";
import Search from "./Search";

const Content = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [searchedAttr, setSearchedAttr] = useState([]);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    filterJobsHandler();
  }, [searchedAttr]);


  const filterJobsHandler = () => {

    let tempJobList = [];
    let count = 0;
    for (let job of jobs) {
      for (let attr of searchedAttr) {
        for (let value of Object.values(job)) {
          if (count === searchedAttr.length) {
            tempJobList = [...tempJobList, job]
            break;
          }
          if (typeof value === 'object') {
            if (value.includes(attr)) {
              count++
            }
          } else if (value === attr) {
            count++;
          }
        }
      }
      count = 0;
    }
    setFilteredJobs(tempJobList);
  };

  const searchAttrHandler = (value) => {
    if (!searchedAttr.includes(value)) {
      setSearchedAttr(searchedAttr => [...searchedAttr, value])
      setSearchedAttr((searchedAttr) => {
        return searchedAttr;
      });
    }
  }


  return (
    <div className={styles.content}>
      <Search />
      <List filteredJobs={filteredJobs} searchAttrHandler={searchAttrHandler} />
    </div>
  );
};

export default Content;
