import React from "react";
import styles from "./ListItem.module.scss";
import DetailsList from "./DetailsList";
import ButtonsGroup from "../../../Utils/ButtonsGroup";

const ListItem = ({ job, searchAttrHandler }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const details = [postedAt, contract, location];
  const buttons = [role, level, languages, tools];
  const offerDetails = [{
    "name": company,
    "new": job.new,
    "featured": featured,
  }, position]


  return (
    <div
      className={
        featured
          ? [styles.listItem, styles.featured].join(" ")
          : styles.listItem}>
      <div className={styles.avatar}>
        <img src={logo.slice(1)} alt="Company logo" />
      </div>
      <div className={styles.itemContent}>
        <ul className={styles.companyData}>
          {offerDetails.map((detail, index) => (
            <DetailsList key={index} detail={detail} searchAttrHandler={searchAttrHandler} />
          ))}
          <li>
            <ul className={styles.details}>
              {details.map((detail, index) => (
                <DetailsList key={index} detail={detail} index={index} size={details.length - 1} searchAttrHandler={''}/>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <ButtonsGroup buttons={buttons} searchAttrHandler={searchAttrHandler} />
    </div>
  );
};

export default ListItem;