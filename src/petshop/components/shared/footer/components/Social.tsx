interface Props {
  url: string;
  alt: string;
}

export const Social = ({ url, alt }: Props) => {
  return (
    <>
      <img src={url} alt={alt} />
    </>
  );
};
