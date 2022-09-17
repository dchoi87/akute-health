import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Section from "../section";
import Button from "../../common/button";
import Checkbox from "../../common/checkbox";
import Input from "../../common/input";

import { useFiltersContext } from "../../_context/filters";
import { useOwnersData, useGroupsData } from "../../_hooks/useTasksData";

import styles from "./index.module.css";

const Owner = () => {
  const [filters, dispatch_f] = useFiltersContext();
  const { data: owners } = useOwnersData();
  const { data: groups } = useGroupsData();
  const [showMore, setShowMore] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const showCount = 6;

  useEffect(() => {
    if (owners && groups) {
      // massage data
      const _owners = Object.keys(owners).map((owner) => {
        return { id: owner, name: owners[owner] };
      });
      const _groups = groups.userGroups.map((group) => {
        return { id: group._id, name: group.groupName, isGroup: true };
      });
      const combined = [..._groups, ..._owners];
      // filter by regex pattern and return array
      const filtered = combined.filter((owner) => {
        const pattern = keyword.toLowerCase();
        const regex = new RegExp(pattern, "g");
        return owner.name.toLowerCase().match(regex);
      });
      // set interable
      setData(filtered);
    }
  }, [owners, groups, keyword]);

  const handleFilter = ({ target }) => {
    dispatch_f({ type: "FILTER_OWNER", payload: target.dataset.id });
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
        </div>
        <div className={styles.owners}>
          {data.map((owner, i) => {
            return (
              (showMore || i < showCount) && (
                <Checkbox
                  key={i}
                  className={classNames({ [styles.group]: owner.isGroup })}
                  id={`owner-${i}`}
                  dataId={owner.id}
                  label={owner.name}
                  onChange={handleFilter}
                  checked={filters.ownerId.includes(owner.id)}
                />
              )
            );
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
