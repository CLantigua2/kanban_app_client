import React from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../constants";
import css from "./drop-wrapper.module.css";

const DropWrapper = ({ moveItem, children, columns, dropColumn }) => {
  const [{ isOver }, dropRef] = useDrop({
    item: { type: ITEM_TYPE, dropColumn },
    accept: ITEM_TYPE,
    canDrop: () => {
      // NOTE: this always returns true
      //       let itemIndex = columns.findIndex((col) => col.status === column.status);
      //       const statusIndex = taskIndexes.findIndex(
      //         (si) => si.status === dropColumn.status,
      //       );
      //       return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
      return true;
    },
    drop: (item, monitor) => {
      const dragIndex = columns.findIndex((col) => col.title === item.column);
      const dropIndex = columns.findIndex(
        (col) => col.title === dropColumn.title,
      );
      if (dragIndex === dropIndex) return;
      moveItem(dragIndex, dropIndex, item.taskId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef} className={css.drop_wrapper}>
      {React.cloneElement(children, { isOver })}
    </div>
  );
};

export default DropWrapper;
