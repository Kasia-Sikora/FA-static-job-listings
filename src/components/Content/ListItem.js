import React from "react";
import styles from "./ListItem.module.scss";
import { BsDot } from "react-icons/bs";
import Badge from "./Badge";

const ListItem = ({ job, searchAttrHandler }) => {
  const {
    id,
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

  const newBadge = {
    name: "new",
    value: "NEW!",
  };

  const featuredBadge = {
    name: "featured",
    value: "FEATURED",
  };


  return (
    <div
      className={
        featured
          ? [styles.listItem, styles.featured].join(" ")
          : styles.listItem
      }
    >
      <div className={styles.itemContent}>
        <div className={styles.avatar}>
          <img src={logo.slice(1)} alt="logo" />
        </div>
        <div className={styles.info}>
          <ul className={styles.companyData}>
            <li>
              {company} {job.new ? <Badge type={newBadge} /> : ""}{" "}
              {featured ? <Badge type={featuredBadge} /> : ""}
            </li>
            <li>{position}</li>
            <li>
              <ul className={styles.details}>
                <li>{postedAt}</li>
                <li>
                  <BsDot />
                </li>
                <li>{contract}</li>
                <li>
                  <BsDot />
                </li>
                <li>{location}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={ () => searchAttrHandler( role)} key={id + role}>{role}</button>
        <button onClick={ () => searchAttrHandler(level)} key={id + level}>{level}</button>
        {languages.map((language) => (
          <button onClick={ () => searchAttrHandler(language)} key={id + language}>{language}</button>
        ))}
        {tools.map((tool) => (
          <button onClick={ () => searchAttrHandler(tool)} key={id + tool}>{tool}</button>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
