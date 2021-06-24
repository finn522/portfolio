import styles from "./styles.module.scss";
import ArrowRight from "public/icons/arrow_right";

const UrlBlock = ({ content }) => {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.content}>
          <a
            href={content.url}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <h2>
              Nieuwsgierig? Bekijk het voor jezelf. <ArrowRight />
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UrlBlock;
