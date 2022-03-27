import { ViewList, ViewStacked, Table } from "react-bootstrap-icons";

export const overview = [
  { label: "today", value: 5 },
  { label: "next 5 days", value: 9 },
  { label: "incomplete", value: 25 },
  { label: "complete", value: 57 },
];

export const priority = ["urgent", "p2", "p3", "no priority"];

export const owner = [
  "matthew stafford",
  "cooper kupp",
  "odell beckham jr",
  "bobby trees",
  "cam akers",
  "darrell henderson jr",
  "andrew whitworth",
  "aaron donald",
  "von miller",
  "leonard floyd",
  "jalen ramsey",
  "johnny hecker",
];

export const status = ["complete", "in progress", "no status", "not started"];

export const tags = [
  "assessments",
  "create new",
  "create tags",
  "diagnostic report",
  "doc review",
  "fax",
  "form submission",
  "health maintenance",
  "new patient signup",
  "support",
];

export const savedFilters = [
  { label: "saved filter 1", date: "10-12-22" },
  { label: "my custom filter", date: "10-31-22" },
  { label: "some filter name", date: "11-22-22" },
];

export const view = [
  { id: "comfortable", svg: <ViewStacked /> },
  { id: "compact", svg: <ViewList /> },
  { id: "table", svg: <Table /> },
];

export const sort = [
  { id: "priority", label: "Sort by Priority" },
  { id: "date", label: "Sort by Due Date" },
];

export const cardsPerPage = [
  { id: "10", label: "10" },
  { id: "20", label: "20" },
  { id: "50", label: "50" },
  { id: "100", label: "100" },
];

export const mockData = [
  {
    id: "card-01",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    owner: "Cooper Kupp",
    patient: "Eli Apple",
    duedate: "03-25-22",
    tags: [
      "form submission",
      "doc review",
      "assessments",
      "diagnostic reports",
      "health maintenance",
      "new patient signup",
    ],
    priority: "urgent",
    state: "N/A",
    attachment: true,
  },
  {
    id: "card-02",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    owner: "Aaron Donald",
    patient: "Joe Burrow",
    duedate: "05-21-22",
    tags: ["form submission", "doc review", "assessments"],
    priority: "p2",
    state: "PA",
    attachment: false,
  },
  {
    id: "card-03",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Matthew Stafford",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: [
      "form submission",
      "doc review",
      "assessments",
      "diagnostic reports",
      "health maintenance",
    ],
    priority: "no priority",
    state: "FL",
    attachment: true,
  },
  {
    id: "card-04",
    title:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Von Miller",
    patient: "Joe Burrow",
    duedate: "12-15-22",
    tags: ["form submission", "doc review"],
    priority: "urgent",
    state: "TX",
    attachment: false,
  },
  {
    id: "card-05",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Cooper Kupp",
    patient: "Von Bell",
    duedate: "10-25-22",
    tags: ["form submission"],
    priority: "p3",
    state: "WA",
    attachment: true,
  },
  {
    id: "card-06",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    owner: "Cooper Kupp",
    patient: "Eli Apple",
    duedate: "03-25-22",
    tags: [
      "form submission",
      "doc review",
      "assessments",
      "diagnostic reports",
      "health maintenance",
      "new patient signup",
    ],
    priority: "urgent",
    state: "N/A",
    attachment: true,
  },
  {
    id: "card-07",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    owner: "Aaron Donald",
    patient: "Joe Burrow",
    duedate: "05-21-22",
    tags: ["form submission", "doc review", "assessments"],
    priority: "p2",
    state: "PA",
    attachment: true,
  },
  {
    id: "card-08",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Matthew Stafford",
    patient: "Von Bell",
    duedate: "08-05-22",
    tags: [
      "form submission",
      "doc review",
      "assessments",
      "diagnostic reports",
      "health maintenance",
    ],
    priority: "no priority",
    state: "FL",
    attachment: false,
  },
  {
    id: "card-09",
    title:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Von Miller",
    patient: "Joe Burrow",
    duedate: "12-15-22",
    tags: ["form submission", "doc review"],
    priority: "urgent",
    state: "TX",
    attachment: true,
  },
  {
    id: "card-10",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Cooper Kupp",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: ["form submission"],
    priority: "p3",
    state: "WA",
    attachment: false,
  },
  {
    id: "card-11",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    owner: "Cooper Kupp",
    patient: "Eli Apple",
    duedate: "03-25-22",
    tags: [
      "form submission",
      "doc review",
      "assessments",
      "diagnostic reports",
      "health maintenance",
      "new patient signup",
    ],
    priority: "urgent",
    state: "N/A",
    attachment: true,
  },
  {
    id: "card-12",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    owner: "Aaron Donald",
    patient: "Joe Burrow",
    duedate: "05-21-22",
    tags: ["form submission", "doc review", "assessments"],
    priority: "p2",
    state: "PA",
    attachment: true,
  },
  {
    id: "card-13",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Matthew Stafford",
    patient: "Von Bell",
    duedate: "08-05-22",
    tags: [
      "form submission",
      "doc review",
      "assessments",
      "diagnostic reports",
      "health maintenance",
    ],
    priority: "no priority",
    state: "FL",
    attachment: false,
  },
  {
    id: "card-14",
    title:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Von Miller",
    patient: "Joe Burrow",
    duedate: "12-15-22",
    tags: ["form submission", "doc review"],
    priority: "urgent",
    state: "TX",
    attachment: true,
  },
  {
    id: "card-15",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Cooper Kupp",
    patient: "Von Bell",
    duedate: "10-25-22",
    tags: ["form submission"],
    priority: "p3",
    state: "WA",
    attachment: false,
  },
];
