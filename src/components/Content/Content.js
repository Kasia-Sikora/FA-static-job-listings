import React, { useState, useEffect } from "react";
import styles from "./Content.module.scss";
import List from "./List";
import Search from "./Search/Search";

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
    if (!searchedAttr.length) {
      setFilteredJobs(jobs)
    } else {
      let tempJobList = [];
      let count = 0;
      for (let job of jobs) {
        for (let attr of searchedAttr) {
          for (let value of Object.values(job)) {
            if (typeof value === 'object') {
              if (value.includes(attr)) {
                count++
              }
            } else if (value === attr) {
              count++;
            }
            if (count === searchedAttr.length) {
              tempJobList = [...tempJobList, job]
              break;
            }
          }
          if (count === 0) {
            break;
          }
        }
        count = 0;
      }
      setFilteredJobs(tempJobList);
    }
  };

  const searchAttrHandler = (value) => {
    if (!searchedAttr.includes(value)) {
      setSearchedAttr(searchedAttr => [...searchedAttr, value])
      setSearchedAttr((searchedAttr) => {
        return searchedAttr;
      });
    }
  }

  const removeCategoriesHandler = (value) => {
    if (value) {
      setSearchedAttr(searchedAttr.filter(attribute => attribute !== value))
    } else {
      setSearchedAttr([]);
      setFilteredJobs(jobs)
    }
  }


  return (
    <div className={styles.content}>
      <Search searchedAttr={searchedAttr} removeCategoriesHandler={removeCategoriesHandler} />
      <List filteredJobs={filteredJobs} searchAttrHandler={searchAttrHandler} />
    </div>
  );
};

export default Content;
