import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <img
        className="main-header__logo"
        src="/images/Logo.png"
        alt="Petshop logo"
        onClick={handleNavigateHome}
      />
    </>
  );
};
