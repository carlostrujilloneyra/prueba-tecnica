import { Route, Routes } from "react-router-dom";
import { HomePage, SuccessfulPurchasePage } from "../petshop/pages";
import { Header } from "../petshop/components/shared";

export const AppRouter = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Puede haber una ruta para compra fallida, pendiente */}

        {/* Ruta que me llevará a la compra exitosa */}
        <Route
          path="/successful-purchase"
          element={<SuccessfulPurchasePage />}
        />
      </Routes>

      {/* Footer */}
    </>
  );
};
