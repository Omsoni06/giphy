import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.github.com/Omsoni06 ">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/omsoni06/">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.twitter.com/om_soni__/">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
