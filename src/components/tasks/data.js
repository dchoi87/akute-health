import {
  Calendar3,
  ExclamationDiamond,
  Funnel,
  Person,
  Check2Square,
  Tag,
  Heart,
  ViewList,
  ViewStacked,
  Table
} from "react-bootstrap-icons";

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

export const sectionSvg = {
  overview: <Calendar3 />,
  sort: <Funnel />,
  filters: <Heart />,
  priority: <ExclamationDiamond />,
  owner: <Person />,
  status: <Check2Square />,
  tags: <Tag />,
};

export const savedFilters = [
  { label: "saved filter 1", date: "10-12-22" },
  { label: "my custom filter", date: "10-31-22" },
  { label: "some filter name", date: "11-22-22" },
];

export const view = [
  { id: "comfortable", svg: <ViewStacked />},
  { id: "compact", svg: <ViewList />},
  { id: "table", svg: <Table />},
];

export const mockData = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    owner: "Cooper Kupp",
    patient: "Eli Apple",
    duedate: "03-25-22",
    tags: ["form submission", "doc review", "assessments", "diagnostic reports", "health maintenance", "new patient signup"],
    priority: "urgent",
    state: "no state",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    owner: "Aaron Donald",
    patient: "Joe Burrow",
    duedate: "05-21-22",
    tags: ["form submission", "doc review", "assessments"],
    priority: "p2",
    state: "PA",
    attachment: false
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Matthew Stafford",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: ["form submission", "doc review", "assessments", "diagnostic reports", "health maintenance"],
    priority: "no priority",
    state: "FL",
    attachment: true
  },
  {
    title: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Von Miller",
    patient: "Joe Burrow",
    duedate: "12-15-22",
    tags: ["form submission", "doc review"],
    priority: "urgent",
    state: "TX",
    attachment: false
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Cooper Kupp",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: ["form submission"],
    priority: "p3",
    state: "WA",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    owner: "Cooper Kupp",
    patient: "Eli Apple",
    duedate: "03-25-22",
    tags: ["form submission", "doc review", "assessments", "diagnostic reports", "health maintenance", "new patient signup"],
    priority: "urgent",
    state: "no state",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    owner: "Aaron Donald",
    patient: "Joe Burrow",
    duedate: "05-21-22",
    tags: ["form submission", "doc review", "assessments"],
    priority: "p2",
    state: "PA",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Matthew Stafford",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: ["form submission", "doc review", "assessments", "diagnostic reports", "health maintenance"],
    priority: "no priority",
    state: "FL",
    attachment: false
  },
  {
    title: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Von Miller",
    patient: "Joe Burrow",
    duedate: "12-15-22",
    tags: ["form submission", "doc review"],
    priority: "urgent",
    state: "TX",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Cooper Kupp",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: ["form submission"],
    priority: "p3",
    state: "WA",
    attachment: false
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    owner: "Cooper Kupp",
    patient: "Eli Apple",
    duedate: "03-25-22",
    tags: ["form submission", "doc review", "assessments", "diagnostic reports", "health maintenance", "new patient signup"],
    priority: "urgent",
    state: "no state",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    owner: "Aaron Donald",
    patient: "Joe Burrow",
    duedate: "05-21-22",
    tags: ["form submission", "doc review", "assessments"],
    priority: "p2",
    state: "PA",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Matthew Stafford",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: ["form submission", "doc review", "assessments", "diagnostic reports", "health maintenance"],
    priority: "no priority",
    state: "FL",
    attachment: false
  },
  {
    title: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Von Miller",
    patient: "Joe Burrow",
    duedate: "12-15-22",
    tags: ["form submission", "doc review"],
    priority: "urgent",
    state: "TX",
    attachment: true
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    owner: "Cooper Kupp",
    patient: "Von Bell",
    duedate: "12-15-22",
    tags: ["form submission"],
    priority: "p3",
    state: "WA",
    attachment: false
  },
]