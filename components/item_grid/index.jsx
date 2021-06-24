import ItemGridCard from "components/item_grid_card";
import styles from "./styles.module.scss";

const ItemGrid = ({ items, title }) => {
  return (
    <div className={"wrapper"}>
      <h2>{title}</h2>
      <ul className={styles.grid}>
        {items.map((item, index) => {
          return (
            <ItemGridCard
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
