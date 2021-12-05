export const taskStatusType = {
  OPEN: "Open",
  INPROGRESS: "In Progress",
  CLOSED: "Closed",
  BLOCKED: "Blocked",
  DONE: "Done",
};

export const taskIndexes = Object.keys(taskStatusType).map((status, index) => ({
  status,
  index,
}));

export const statusColors = {
  [taskStatusType.OPEN]: "#EB5A46",
  [taskStatusType.INPROGRESS]: "#00C2E0",
  [taskStatusType.CLOSED]: "",
  [taskStatusType.BLOCKED]: "",
  [taskStatusType.DONE]: "#3981DE",
};

export const ITEM_TYPE = "ITEM";

export const PRIORITY_TYPES = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  VERY_HIGH: "Very High",
};