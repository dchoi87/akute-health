import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Section from "../section";
import Button from "../../common/button";
import Checkbox from "../../common/checkbox";
import Input from "../../common/input";

import { useFiltersContext } from "../../_context/filters";
import { useTagsData, useGroupsData } from "../../_hooks/useTasksData";

import styles from "./index.module.css";

const Tags = () => {
  const [filters, dispatch_f] = useFiltersContext();
  const { data: tags } = useTagsData();
  const { data: groups } = useGroupsData();
  const [showMore, setShowMore] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const showCount = 10;

  useEffect(() => {
    if (tags && groups) {
      // massage data
      const _tags = tags.tasks.map((tag) => {
        return { id: tag, name: tag };
      });
      const _groups = groups.groups.map((group) => {
        return { id: group._id, name: group.groupName, isGroup: true };
      });
      const combined = [..._groups, ..._tags];
      // filter by regex pattern and return array
      const filtered = combined.filter((tag) => {
        const pattern = keyword.toLowerCase();
        const regex = new RegExp(pattern, "g");
        return tag.name.toLowerCase().match(regex);
      });
      // set iterable
      setData(filtered);
    }
  }, [tags, groups, keyword]);

  const handleFilter = ({ target }) => {
    const { id, group } = target.dataset;
    const type = group ? "FILTER_TAG_GROUP" : "FILTER_TAGS";
    dispatch_f({ type: type, payload: id });
  };

  const handleSearch = ({ target }) => {
    setKeyword(target.value);
  };

  return (
    <Section title="Tags" id="tags">
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <Input
            type="search"
            id="tags-search"
            placeholder="Search Tags"
            onChange={handleSearch}
          />
        </div>
        <div className={styles.tags}>
          {data.map((tag, i) => {
            return (
              (showMore || i < showCount) && (
                <Checkbox
                  key={i}
                  className={classNames(styles.tag, {
                    [styles.group]: tag.isGroup,
                  })}
                  id={`tags-${i}`}
                  dataId={tag.id}
                  dataGroup={tag.isGroup}
                  label={tag.name}
                  onChange={handleFilter}
                  checked={
                    filters.tags.includes(tag.id) ||
                    filters.tagGroups.includes(tag.id)
                  }
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

export default Tags;
