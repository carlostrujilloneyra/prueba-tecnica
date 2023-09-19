import { socialNetworks } from "../../../../data/social-networks";
import { Social } from "./Social";

export const SocialList = () => {
  return (
    <>
      <div className="social-networks-footer">
        {socialNetworks.map((social) => {
          return <Social key={social.alt} url={social.url} alt={social.alt} />;
        })}
      </div>
    </>
  );
};
