import React from "react";

import { useFiltersContext } from "../tasks/context/filters";
import { queryBuilder } from "../tasks/helpers";

import styles from "./index.module.css";

const syntaxHighlight = (json) => {
  if (typeof json !== "string") {
    json = JSON.stringify(json, undefined, 2);
  }

  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const regex =
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

  return json.replace(regex, function (match) {
    let className;

    switch (true) {
      case /^"/.test(match): {
        if (/:$/.test(match)) {
          className = "key";
          break;
        }
        className = "string";
        break;
      }
      case /true|false/.test(match): {
        className = "boolean";
        break;
      }
      case /null/.test(match): {
        className = "null";
        break;
      }
      default: {
        className = "number";
      }
    }

    return `<span class="${styles[className]}">${match}</span>`;
  });
};

const QueryHelper = () => {
  const [filters] = useFiltersContext();
  const json = syntaxHighlight(queryBuilder(filters).params);

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <pre
          className={styles.pre}
          dangerouslySetInnerHTML={{ __html: json }}
        />
      )}
    </>
  );
};

export default QueryHelper;
