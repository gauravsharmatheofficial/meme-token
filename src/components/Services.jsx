import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { wildsideofcrypto } from "../assets";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="In Crypto We Trust, But In Uranus, We Believe!"
          // text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="">
          <div className="flex flex-col md:flex-row items-center mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-35 xl:h-[46rem]">
            <div className="basis-1/2">
              <img
                className=""
                width={800}
                alt="The Memeifesto"
                height={730}
                src={wildsideofcrypto}
              />
            </div>

            <div className="pl-0 pt-5 md:pt-0 md:pl-5 basis-1/2">
              <h4 className="h4 mb-4">The Memeifesto</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Welcome to the wild side of crypto - where memes aren't just
                dreams, and astrology isn’t just your daily horoscope.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          <div className="">
            <div className="flex flex-col p-4 bg-n-7 rounded-3xl">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Watch This To know More</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Elon sues OpenAI, Apple's decline, TikTok ban, Bitcoin $100K?,
                  Science corner: Microplastics
                </p>
              </div>

              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/snbTCWL6rxo"
                  title="E169: Elon sues OpenAI, Apple&#39;s decline, TikTok ban, Bitcoin $100K?, Science corner: Microplastics"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
