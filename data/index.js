import { uuid } from "uuidv4";
import { taskStatusType } from "../constants";

export const data = [
  {
    taskId: uuid(),
    status: taskStatusType.OPEN,
    title: "Create Feature A",
    description: "Feature A is needed, so make it",
    createdDate: new Date(),
    updatedDate: null,
    completedDate: null,
    comments: function () {
      return [
        {
          taskId: this.taskId,
          commentId: uuid(),
          commentText: "hello world",
          commentDate: new Date(),
        },
      ];
    },
  },
  {
    taskId: uuid(),
    status: taskStatusType.OPEN,
    title: "Refactor feature B",
    description: "Feature B is broken, so fix it",
    createdDate: new Date(),
    updatedDate: null,
    completedDate: null,
    comments: function () {
      return [
        {
          taskId: this.taskId,
          commentId: uuid(),
          commentText: "Is this even working?",
          commentDate: new Date(),
        },
      ];
    },
  },
  {
    taskId: uuid(),
    status: taskStatusType.OPEN,
    title: "Create Feature C",
    description: "Feature C is needed, so make it",
    createdDateDate: new Date(),
    updatedDateDate: null,
    completedDate: null,
    comments: function () {
      return [
        {
          taskId: this.taskId,
          commentId: uuid(),
          commentText: "hello world",
          commentDate: new Date(),
        },
      ];
    },
  },
];
