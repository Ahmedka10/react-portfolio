import X from "@/assets/twitter.png";
import Facebook from "@/assets/facebook.png";
import Instagram from "@/assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/Ahmedkhadar100"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={X} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/ahmednuurKadar10"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={Facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/Ahmedkadar10"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={Instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
