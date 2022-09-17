import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Button from "../common/button";
import Select from "../common/select";

import { useFiltersContext } from "../context/filters";
import { cardsPerPage } from "../constants";

import styles from "./index.module.css";

const Pagination = ({ page, count }) => {
  const [filters, dispatch_f] = useFiltersContext();

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
          Page {page + 1} of {count}
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
            disabled={false} // TODO
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
