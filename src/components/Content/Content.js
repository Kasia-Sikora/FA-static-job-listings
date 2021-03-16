import React, { useState, useEffect } from "react";
import data from '../../assets/data.json';
import styles from "./Content.module.scss";
import List from "./List/List";
import Search from "./Search/Search";

const Content = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [searchedAttr, setSearchedAttr] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, [])

  useEffect(() => {
    if (!searchedAttr.length) {
      setFilteredJobs(jobs)
    } else {
      let tempJobList = [];
      for (let job of jobs) {
        if (searchedAttr.every(attribute => JSON.stringify(job).search(attribute) > -1)) {
          tempJobList = [...tempJobList, job]
        }
      }
      setFilteredJobs(tempJobList)
    }
  }, [searchedAttr, jobs]);

  const searchAttrHandler = (value) => {
    if (!searchedAttr.includes(value)) {
      setSearchedAttr(searchedAttr => [...searchedAttr, value])
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
