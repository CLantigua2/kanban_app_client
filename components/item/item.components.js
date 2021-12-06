import { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "../Window";
import css from "./item.module.css";
import { ITEM_TYPE, statusColors } from "../../constants";

const Item = ({ item, moveItem, index, column, columns }) => {
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  const [, drop] = useDrop(
    {
      type: ITEM_TYPE,
      accept: ITEM_TYPE,
      hover: (item, monitor) => {
        if (!ref.current) return;

        const dragIndex = column.values.findIndex(
          (v) => v.taskId === item.taskId,
        );

        const hoverIndex = index;

        if (dragIndex === hoverIndex) return;

        const hoveredRect = ref?.current?.getBoundingClientRect();
        const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
        const mousePosition = monitor.getClientOffset();
        const hoverClientY = mousePosition.y - hoveredRect.top;

        if (
          (dragIndex < hoverIndex || dragIndex > hoverClientY) &&
          hoverClientY < hoverMiddleY
        )
          return;

        moveItem(column, dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
      drop: (item, monitor) => {
        // console.log({ item });
      },
    },
    [moveItem],
  );

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: {
      type: ITEM_TYPE,
      taskId: item.taskId,
      column: column.title,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleAccordion = () => setShow(!show);

  drag(drop(ref));

  return (
    <div
      role="button"
      ref={ref}
      style={{ opacity: isDragging ? 0 : 1 }}
      className={css.item}
      onClick={handleAccordion}
      onKeyDown={() => {}}
    >
      <div
        className={css.color_bar}
        style={{ backgroundColor: statusColors[column.status] }}
      ></div>
      <p className={css.item_title}>{item.title}</p>
      <div
        className={`${css.item_content} ${show ? css.expanded : css.closed}`}
      >
        <Window item={item} show={show} />
      </div>
    </div>
  );
};

export default Item;
