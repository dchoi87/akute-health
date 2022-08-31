import React, { useState, useEffect } from "react";
import { Star } from "react-bootstrap-icons";

import Section from "../section";
import Button from "../../common/button";
import Checkbox from "../../common/checkbox";
import Input from "../../common/input";

import { useOwnersData, useGroupsData } from "../../hooks/useTasksData";

import styles from "./index.module.css";

const Owner = ({ filters, dispatch }) => {
  const { data: owners } = useOwnersData();
  const { data: groups } = useGroupsData();
  const [showGroup, setGroup] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const showCount = 6;

  useEffect(() => {
    if (owners) {
      const filtered = Object.keys(owners).filter((owner) => {
        const pattern = keyword.toLowerCase();
        const regex = new RegExp(pattern, "g");
        return owners[owner].toLowerCase().match(regex);
      });
      setData(filtered);
    }
  }, [owners, keyword]);

  const handleFilter = ({ target }) => {
    dispatch({ type: "FILTER_OWNER", payload: target.dataset.id });
  };

  const handleGroup = () => {
    setGroup(!showGroup);
  };

  const handleSearch = ({ target }) => {
    setKeyword(target.value);
  };

  return (
    <Section title="Owner" id="owner">
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <Input
            type="search"
            id="owner-search"
            placeholder="Search Owner"
            onChange={handleSearch}
          />
          <Button
            type="collection"
            id="owner-group"
            onClick={handleGroup}
            isActive={showGroup}
          >
            <Star />
          </Button>
        </div>
        <div className={styles.owners}>
          {showGroup &&
            groups &&
            groups.userGroups.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  id={`owner-group-${i}`}
                  dataId={item._id}
                  label={item.groupName}
                  onChange={handleFilter}
                  className={styles.group}
                  section="group"
                  checked={filters.ownerId.includes(item._id)}
                />
              );
            })}
          {data.map((owner, i) => {
            if (showMore || i < showCount) {
              return (
                <Checkbox
                  key={i}
                  id={`owner-${i}`}
                  dataId={owner}
                  label={owners[owner]}
                  onChange={handleFilter}
                  checked={filters.ownerId.includes(owner)}
                />
              );
            }
          })}
        </div>
        {data.length > showCount && (
          <Button type="more" onClick={() => setShowMore(!showMore)}>
            Show {showMore ? "Less" : "More"}
          </Button>
        )}
      </div>
    </Section>
  );
};

export default Owner;
