import React from "react";
import ListItem from "./ListItem/ListItem";

const ListContainer = ({ filteredJobs, searchAttrHandler }) => {

  return (
    <>
      {filteredJobs.map((job) => (
        <ListItem
          key={job.id}
          job={job}
          searchAttrHandler={searchAttrHandler}
        />
      ))}
    </>
  );
};

export default ListContainer;
