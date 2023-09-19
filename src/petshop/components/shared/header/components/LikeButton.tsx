import { IconHeart } from "@tabler/icons-react";
import { QuantityLikes } from "./QuantityLikes";

export const LikeButton = () => {
  return (
    <>
      <div style={{ height: 27 }}>
        <IconHeart
          style={{ cursor: "pointer", position: "relative" }}
          aria-label="Like button"
          color="#f0c60c"
          size={27}
          strokeWidth={2.2}
        />
        <QuantityLikes />
      </div>
    </>
  );
};
