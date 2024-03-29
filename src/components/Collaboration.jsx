import { uranusLogo, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses id="about">
      <div className="container lg:flex">
        <div className="max-w-none lg:max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">About Us</h2>

          <ul className="max-w-none lg:max-w-[30rem] mb-10 md:mb-6">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-start">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5 text-n-4">{item.text}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="flex items-start body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[30rem] lg:mx-auto">
            <img src={check} width={24} height={24} alt="check" />
            <h6 className="body-2 ml-5 text-n-4">{collabText}</h6>
          </div>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={uranusLogo}
                    width={48}
                    height={48}
                    alt="brainwave"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto rounded-full"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
