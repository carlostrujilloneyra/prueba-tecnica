import { useNavigate } from "react-router-dom";
import "../../../styles/MainPurchaseSuccessful.css";

export const PurchaseSuccessful = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <main className="purchase-successful container">
        <div className="main-purchase-successful">
          <img
            src="/images/Check-pedido-exitoso.png"
            alt="Check-pedido-exitoso"
          />

          <h1>¡Pedido exitoso!</h1>
          <p className="description-payment">
            Muchas gracias por comprar con nosotros, tu pedido se realizó con
            éxito.
          </p>
        </div>

        <div className="container-button container">
          <button onClick={handleNavigate}>Seguir comprando</button>
        </div>
      </main>
    </>
  );
};
