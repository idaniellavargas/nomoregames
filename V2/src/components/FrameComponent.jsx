import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.orderSummaryLabel}>
        <div className={styles.identifierLabelAa}>
          <div className={styles.identificadorDePedidoParent}>
            <div
              className={styles.identificadorDePedido}
            >{`Identificador de pedido: `}</div>
            <div className={styles.aa8213}>1238aA8213</div>
          </div>
          <div className={styles.referenciaDePedidoParent}>
            <div className={styles.referenciaDePedido}>
              Referencia de pedido:
            </div>
            <div className={styles.x8zc75Wrapper}>
              <div className={styles.x8zc75}>71283667x8zc75</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.completeButtonLabel}>
        <div className={styles.completeButtonLabelChild} />
        <div className={styles.importe}>Importe:</div>
        <div className={styles.currencyLabel}>
          <div className={styles.usd}>20,00 USD</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
