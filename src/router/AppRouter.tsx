import { Route, Routes } from "react-router-dom";
import { HomePage, SuccessfulPurchasePage } from "../petshop/pages";
import { Footer, Header } from "../petshop/components/shared";
import { StateProvider } from "../petshop/context/StateProvider";

export const AppRouter = () => {
  return (
    <>
      <StateProvider>
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
        <Footer />
      </StateProvider>
    </>
  );
};
