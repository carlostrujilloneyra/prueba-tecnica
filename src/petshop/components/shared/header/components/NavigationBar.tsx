import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export const NavigationBar = () => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(query);
    e.preventDefault();
  };

  return (
    <>
      <form className="main-navigation-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Buscar producto o marca..."
        />
        <button
          className="main-button-search"
          aria-label="Buscar producto o marca"
          type="button"
        >
          <IconSearch size={24} strokeWidth={2.2} color="#383c41" />
        </button>
      </form>
    </>
  );
};
