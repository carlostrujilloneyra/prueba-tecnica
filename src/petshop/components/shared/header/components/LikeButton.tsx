import { IconHeart } from "@tabler/icons-react";

export const LikeButton = () => {
  return (
    <>
      <IconHeart
        style={{ cursor: "pointer" }}
        aria-label="Like button"
        color="#f0c60c"
        size={27}
        strokeWidth={2.2}
      />
    </>
  );
};
