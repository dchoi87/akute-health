import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Button from "../common/button";
import Select from "../common/select";

import { useFiltersContext } from "../_context/filters";
import { useTasksData } from "../_hooks/useTasksData";
import { cardsPerPage } from "../constants";

import styles from "./index.module.css";

const Pagination = () => {
  const [filters, dispatch_f] = useFiltersContext();
  const { data: tasks } = useTasksData(filters);

  const handlePageLimit = ({ value }) => {
    dispatch_f({ type: "CHANGE_LIMIT", payload: value });
  };

  const handleChangePage = (value) => {
    dispatch_f({ type: "CHANGE_PAGE", payload: filters.page + value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <div className={styles.count}>
          <Select
            type="cards"
            options={cardsPerPage}
            defaultValue={cardsPerPage[0]}
            menuPlacement="top"
            onChange={handlePageLimit}
          />
        </div>
        <div className={styles.page}>
          Page {filters.page + 1} of {tasks && tasks.count}
        </div>
        <div className={styles.navigation}>
          <Button
            type="pagination"
            id="previous"
            onClick={() => handleChangePage(-1)}
            disabled={filters.page === 0}
          >
            <ChevronLeft />
          </Button>
          <Button
            type="pagination"
            id="next"
            onClick={() => handleChangePage(1)}
            disabled={false} // TODO: logic
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
