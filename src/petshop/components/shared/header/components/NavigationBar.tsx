import { IconSearch } from "@tabler/icons-react";

export const NavigationBar = () => {
  return (
    <>
      <form className="main-navigation-bar ">
        <input type="text" placeholder="Buscar producto o marca..." />
        <button className="main-button-search" type="submit">
          <IconSearch size={24} strokeWidth={2.2} color="#383c41" />
        </button>
      </form>
    </>
  );
};
