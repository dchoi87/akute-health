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
  { value: "filter1", label: "saved filter 1" },
  { value: "filter2", label: "my custom filter" },
  { value: "filter3", label: "some filter name" },
];

export const view = [
  { id: "comfortable", svg: <ViewStacked /> },
  { id: "compact", svg: <ViewList /> },
  { id: "table", svg: <Table /> },
];

export const sort = [
  { value: "priority", label: "Priority" },
  { value: "date", label: "Due Date" },
];

export const cardsPerPage = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

export const mockData = [
  {
    id: "task-01",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    owner: "Cooper Kupp",
    patient: "Trayvon Henderson",
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
    id: "task-02",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    owner: "Aaron Donald",
    patient: "Akeem Davis-Gaither",
    duedate: "05-21-22",
    tags: ["form submission", "doc review", "assessments"],
    priority: "p2",
    state: "PA",
    attachment: false,
  },
  {
    id: "task-03",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Matthew Stafford",
    patient: "Marquez Valdes-Scantling",
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
    id: "task-04",
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
    id: "task-05",
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
    id: "task-06",
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
    id: "task-07",
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
    id: "task-08",
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
    id: "task-09",
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
    id: "task-10",
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
    id: "task-11",
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
    id: "task-12",
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
    id: "task-13",
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
    id: "task-14",
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
    id: "task-15",
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
