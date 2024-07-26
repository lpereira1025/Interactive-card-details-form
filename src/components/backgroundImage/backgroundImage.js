import bgMobile from "../../images/bg-main-mobile.png";
import bgDesktop from "../../images/bg-main-desktop.png";

const BackgroundImage = () => {
  return (
    <div className="absolute -z-10 w-full">
      <picture>
        <source media="(min-width: 768px)" srcSet={bgDesktop} />
        <img src={bgMobile} alt="" className="w-full md:w-1/3" />
      </picture>
    </div>
  );
};

export default BackgroundImage;
