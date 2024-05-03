import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.firstImageWrapper}>
        <div className={styles.firstImage}>
          <div className={styles.expirationDateLabel}>
            <h2 className={styles.informacionDelPago}>Informacion del pago</h2>
          </div>
          <div className={styles.expirationDate}>Expiration Date</div>
          <div className={styles.cardNumberInput}>
            <div className={styles.frameParent}>
              <div className={styles.ddMmYyWrapper}>
                <input
                  className={styles.ddMmYy}
                  placeholder="DD/MM/YY"
                  type="text"
                />
              </div>
              <div className={styles.cvc}>CVC</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.numeroDeTarjetaParent}>
                <div className={styles.numeroDeTarjeta}>Numero de tarjeta</div>
                <input
                  className={styles.cardNumber}
                  placeholder="Numero de tarjeta"
                  type="text"
                />
              </div>
              <input className={styles.cvc1} placeholder="CVC" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.confirmationButton}>
        <button className={styles.vectorParent}>
          <img className={styles.frameItem} alt="" src="/rectangle-10.svg" />
          <div className={styles.validar}>Validar</div>
        </button>
      </div>
      <div className={styles.secondImageParent}>
        <div className={styles.secondImage}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <input className={styles.checkboxes} type="checkbox" />
          </div>
        </div>
        <div className={styles.secondCheckboxContainer}>
          <div className={styles.secondCheckboxContainerChild} />
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <div className={styles.checkboxesWrapper}>
            <input className={styles.checkboxes1} type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
