import moment from "moment";
import { ViewList, ViewStacked, Table } from "react-bootstrap-icons";

export const priority = [
  { id: "p1", label: "urgent" },
  { id: "p2", label: "p2" },
  { id: "p3", label: "p3" },
  { id: "", label: "no priority" },
];

export const status = [
  { id: "complete", label: "complete" },
  { id: "in-progress", label: "in progress" },
  { id: "not-started", label: "not started" },
  { id: "", label: "no status" },
];

export const cardsPerPage = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

export const viewOptions = [
  { id: "comfortable", svg: <ViewStacked /> },
  { id: "compact", svg: <ViewList /> },
  { id: "table", svg: <Table /> },
];

export const sortOptions = [
  { value: "priority", label: "Priority" },
  { value: "dueDate", label: "Due Date" },
];

export const presetRadios = [
  { id: "today", label: "today" },
  { id: "next-5-days", label: "next 5 days" },
  { id: "incomplete", label: "incomplete" },
  { id: "complete", label: "complete" },
];

export const presetPayload = {
  today: { payload: moment().format("YYYY-MM-DD"), source: "dueDate" },
  "next-5-days": {
    payload: moment().add(5, "days").format("YYYY-MM-DD"),
    source: "dueDate",
  },
  incomplete: { payload: ["not-started", "in-progress", ""], source: "status" },
  complete: { payload: ["complete"], source: "status" },
};
