import { CartShopping } from "./CartShopping";
import { LikeButton } from "./LikeButton";

export const ContainerButtons = () => {
  return (
    <>
      <div className="container-buttons-header">
        <LikeButton />
        <CartShopping />
        <div className="price-to-pay">
          <span>s/12</span>
        </div>
      </div>
    </>
  );
};
