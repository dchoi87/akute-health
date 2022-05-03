import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Button from "../common/button";
import Select from "../common/select";

import { cardsPerPage } from "../data";

import styles from "./index.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <div className={styles.count}>
          <Select options={cardsPerPage} id="cards" />
        </div>
        <div className={styles.page}>Page 1 of 48</div>
        <div className={styles.navigation}>
          <Button type="pagination">
            <ChevronLeft />
          </Button>
          <Button type="pagination">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
