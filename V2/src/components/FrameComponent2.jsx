import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.desktop1Inner}>
      <header className={styles.image5Parent}>
        <img
          className={styles.image5Icon}
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
        <div className={styles.nomoregamesWrapper}>
          <h3 className={styles.nomoregames}>NOMOREGAMES</h3>
        </div>
        <ul className={styles.buyClassicEducativeMobile}>
          <div className={styles.comprarClasicosEducativosMo}>
            <a className={styles.comprar}>Comprar</a>
            <a className={styles.clasicos}>Clasicos</a>
            <a className={styles.educativos}>Educativos</a>
            <a className={styles.movil}>Movil</a>
          </div>
        </ul>
      </header>
    </div>
  );
};

export default FrameComponent2;
