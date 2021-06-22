import WorkGridItem from "components/item_grid_card";
import styles from "./styles.module.scss";

const ItemGrid = ({ items, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul className={styles.grid}>
        {items.map((item, index) => {
          return (
            <WorkGridItem
              key={index}
              name={item.name}
              image={item.image}
              url={item.url}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ItemGrid;
