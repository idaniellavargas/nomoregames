import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <FrameComponent2 />
      <main className={styles.frameParent}>
        <FrameComponent1 />
        <FrameComponent />
        <section className={styles.productNameParent}>
          <div className={styles.productName} />
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxesContainerChild} />
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
        </section>
        <div className={styles.ustedEstaComprandoContainer}>
          <p className={styles.ustedEstaComprando}>
            Usted esta comprando lo siguiente:
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.silksongzip804Mb}>Silksong.zip (804 mb)</p>
        </div>
      </main>
    </div>
  );
};

export default Desktop;
