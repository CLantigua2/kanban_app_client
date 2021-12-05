import { v4 } from "uuid";
import { taskStatusType } from "../constants";

export const data = [
  {
    taskId: v4(),
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
          commentId: v4(),
          commentText: "hello world",
          commentDate: new Date(),
        },
      ];
    },
  },
  {
    taskId: v4(),
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
          commentId: v4(),
          commentText: "Is this even working?",
          commentDate: new Date(),
        },
      ];
    },
  },
  {
    taskId: v4(),
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
          commentId: v4(),
          commentText: "hello world",
          commentDate: new Date(),
        },
      ];
    },
  },
];
