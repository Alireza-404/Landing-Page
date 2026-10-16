import { LuCircleCheck } from "react-icons/lu";
import { SVGData } from "@/data/SVGData";
import { HowItWorkData } from "@/data/HowItWorkData";
import { AutomateProtectionData } from "@/data/AutomateProtectionData";

import Navbar from "@/components/Navbar/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground/ParticlesBackground";
import ScrollRevealText from "@/components/ScrollRevealText/ScrollRevealText";
import GlowBox from "@/components/GlowBox/GlowBox";
import Aos from "@/components/Aos/Aos";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import CapabilitiesBoxes from "@/components/CapabilitiesBoxes(lg)/CapabilitiesBoxes(lg)";
import MotionElements from "@/components/MotionElements/MotionElements";
import FixedScroll from "@/components/FixedScroll(lg)/FixedScroll(lg)";
import TestimonialsBoxes from "@/components/TestimonialsBoxes/TestimonialsBoxes";
import PricingWrapper from "@/components/PricingWrapper/PricingWrapper";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Aos />

      <header className="relative h-screen overflow-hidden flex flex-col">
        <Navbar />

        <div className="relative flex grow">
          <div className="relative -z-0 w-full h-full overflow-hidden">
            <div
              className="z-10 h-2/12 bg-gradient-to-t from-[#000d0189] via-[#000d01] to-[#000d01]
              absolute -top-5 left-0 right-0 blur-2xl"
            ></div>

            <ParticlesBackground />

            <div
              className="z-10 h-2/12 bg-gradient-to-b from-[#000d0189] via-[#000d01] to-[#000d01]
              absolute -bottom-5 left-0 right-0 blur-2xl"
            ></div>
          </div>

          <div
            className="z-20 flex flex-col items-center gap-y-3.5 px-5 w-full absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2"
          >
            <MotionElements
              elem="p"
              className="text-[15px] text-white bg-[#000d01ac] px-2 py-1 border border-[#53db78] rounded-full
              inline-flex items-center gap-x-2.5 text-center"
              text="Trusted by over 1,000 businesses worldwide"
              viewport={{ once: true }}
              initial={{ y: -75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <LuCircleCheck className="text-[#53db78] text-xl sm:block hidden" />
            </MotionElements>

            <MotionElements
              elem="p"
              className="text-[2.5rem] font-semibold text-white text-center leading-9 md:text-6xl md:leading-11"
              viewport={{ once: true }}
              text="Unbreakable security"
              initial={{ y: -75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />

            <MotionElements
              elem="p"
              className="text-[2.5rem] text-white text-center leading-9 md:text-5xl md:leading-11"
              text="for a connected world"
              viewport={{ once: true }}
              initial={{ y: -75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />

            <div className="flex flex-col gap-y-1.5 decora">
              <MotionElements
                elem="p"
                className="text-[#aaa] text-[22px] text-center"
                text="Even the smallest threat leaves a trace."
                initial={{ y: 75, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              />

              <MotionElements
                elem="p"
                className="text-[#aaa] text-xl text-center"
                text="Protex follows the signals others miss."
                initial={{ y: 75, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </div>

            <MotionElements
              elem="div"
              className="flex flex-col gap-y-2.5 w-full px-5 xs:flex-row xs:gap-x-2.5 xs:justify-center"
              initial={{ y: 75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <>
                <PrimaryButton
                  type="button"
                  text="Request demo"
                  className="w-full xs:w-auto px-6 py-3 select-none"
                />

                <SecondaryButton
                  text="Discover more"
                  className="w-full xs:w-auto px-6 py-3 select-none"
                />
              </>
            </MotionElements>
          </div>
        </div>
      </header>

      <main className="mt-12 overflow-x-hidden lg:overflow-x-clip">
        <section id="section-1" className="px-5 md:px-10 xl:px-0">
          <div className="flex flex-col gap-y-10" data-aos="fade-up">
            <p className="text-white text-xs md:text-base md:font-semibold text-center">
              Securing the World’s Fastest-Growing Companies
            </p>

            <div className="relative px-5 overflow-hidden xl:container xl:mx-auto">
              <div
                className="w-3/12 bg-gradient-to-r from-[#000d0189] to-[#000d01]
                absolute z-10 -top-5 h-[200%] -right-5 blur-md"
              ></div>

              <MotionElements
                elem="div"
                className="flex items-center w-[calc(136px*16+40px*16)] md:w-[calc(180px*16+40px*16)] 
                lg:w-[calc(208px*16+40px*16)] gap-x-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20,
                  repeatType: "loop",
                }}
              >
                {[...SVGData, ...SVGData].map((svg, i) => (
                  <div key={i} className="opacity-35 w-34 md:w-45 lg:w-52">
                    {svg}
                  </div>
                ))}
              </MotionElements>

              <div
                className="w-3/12 bg-gradient-to-l from-[#000d0189] to-[#000d01]
                absolute z-10 -top-5 h-[200%] -left-5 blur-md"
              ></div>
            </div>
          </div>

          <ScrollRevealText
            text="Security shouldn’t feel like a chore. With automated checks and adaptive defense, your systems stay protected, even while you sleep."
            className="text-[2rem] md:text-5xl font-thin pt-30 pb-10"
          />
        </section>

        <section
          id="Features"
          className="px-5 md:px-10 xl:px-0 pt-30 xl:container xl:mx-auto overflow-x-hidden"
        >
          <div className="flex flex-col gap-y-7.5 md:gap-y-12 lg:gap-y-18">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2.5">
                <span
                  className="text-[#53db78] font-bold font-mono text-sm 
                border border-[#53db78] rounded-md px-3.5 py-1.5 w-fit"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Features
                </span>

                <p
                  className="text-white font-semibold text-[2rem] md:text-5xl md:leading-normal leading-9"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Build to protect every layer
                </p>
              </div>

              <p
                className="text-[#aaa] text-xl md:w-116"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                From backend to browser, every part of your stack stays locked
                down.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
              <GlowBox aos="fade-right">
                <div className="flex flex-col items-center gap-y-3.5 lg:gap-y-5 px-6 py-12 relative z-30">
                  <div className="w-44 lg:w-50">
                    <img
                      loading="lazy"
                      src={"/icons/FeatureIcons/icon-1.svg"}
                      alt="icon-1"
                    />
                  </div>

                  <div className="flex flex-col gap-y-4.5">
                    <span className="text-[#53db78] text-xs font-medium">
                      Instant visibility. Instant action.
                    </span>

                    <span className="text-white font-medium text-2xl">
                      Real-time threat detection
                    </span>

                    <p className="text-[#aaa]">
                      Suspicious behavior gets flagged the second it appears. No
                      lag. No noise.
                    </p>
                  </div>
                </div>
              </GlowBox>

              <GlowBox aos="fade-left">
                <div className="flex flex-col items-center gap-y-3.5 lg:gap-y-5 px-6 py-12 relative z-30">
                  <div className="w-62 lg:w-72">
                    <img
                      loading="lazy"
                      src={"/icons/FeatureIcons/icon-2.svg"}
                      alt="icon-2"
                    />
                  </div>

                  <div className="flex flex-col gap-y-4.5">
                    <span className="text-[#53db78] text-xs font-medium">
                      See everything. Miss nothing.
                    </span>

                    <span className="text-white font-medium text-2xl">
                      Zero blind spots
                    </span>

                    <p className="text-[#aaa]">
                      Full visibility into every endpoint, request, and action.
                      If it moves, we see it.
                    </p>
                  </div>
                </div>
              </GlowBox>

              <GlowBox aos="fade-right">
                <div className="flex flex-col items-center gap-y-3.5 lg:gap-y-5 px-6 py-12 relative z-30">
                  <div className="w-62 lg:w-72">
                    <img
                      loading="lazy"
                      src={"/icons/FeatureIcons/icon-3.svg"}
                      alt="icon-3"
                    />
                  </div>

                  <div className="flex flex-col gap-y-4.5">
                    <span className="text-[#53db78] text-xs font-medium">
                      Plug into your stack. Fast.
                    </span>

                    <span className="text-white font-medium text-2xl">
                      Seamless integration
                    </span>

                    <p className="text-[#aaa]">
                      Connect in minutes. Works with the tools you already use,
                      right out of the box.
                    </p>
                  </div>
                </div>
              </GlowBox>
            </div>
          </div>
        </section>

        <section
          id="Capabilities"
          className="px-5 md:px-10 xl:px-0 pt-40 xl:container xl:mx-auto overflow-x-hidden"
        >
          <div className="flex flex-col items-center gap-y-7.5 md:gap-y-12 lg:gap-y-18">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col items-center gap-y-2.5">
                <span
                  className="text-[#53db78] font-bold font-mono text-sm mx-auto
                border border-[#53db78] rounded-md px-3.5 py-1.5 w-fit"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Advanced Capabilities
                </span>

                <p
                  className="text-white font-semibold text-[2rem] md:text-5xl md:leading-14 text-center leading-9
                md:w-156"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Automate protection. Customize everything.
                </p>
              </div>

              <p
                className="text-[#aaa] text-xl text-center lg:w-232"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                These advanced capabilities give you the automation,
                flexibility, and resilience needed to stay ahead of evolving
                threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 lg:hidden">
              {AutomateProtectionData.map((item) => (
                <GlowBox
                  key={item.id}
                  aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
                  className={
                    item.id === 3 || item.id === 4
                      ? "md:col-span-1"
                      : "md:col-span-2"
                  }
                >
                  <div className={`relative z-30`}>
                    <div
                      className={`flex flex-col items-center relative z-30 ${
                        item.svg ? "gap-y-2 py-6" : "gap-0"
                      }`}
                    >
                      {item.iconSrc && (
                        <div
                          className={`${
                            item.id === 1
                              ? "w-60 xs:w-82 md:w-2/3"
                              : item.id === 2
                                ? "w-full md:flex md:items-center md:pr-5"
                                : "w-60 h-50 scale-200 md:scale-250"
                          } $`}
                        >
                          <img
                            loading="lazy"
                            src={item.iconSrc}
                            alt={`icon-${item.id}`}
                            className={item.id === 2 ? "md:w-3/5" : "block"}
                          />

                          <div
                            className={`${
                              item.id === 2
                                ? "md:flex hidden flex-col gap-y-2.5 grow-0"
                                : "hidden"
                            }`}
                          >
                            <span className="text-[#53db78] text-xs font-medium">
                              {item.xsText && item.xsText}
                            </span>

                            <span
                              className={`text-white font-medium ${
                                item.id === 3 || item.id === 4
                                  ? "text-base md:text-2xl"
                                  : "text-2xl md:text-3xl"
                              }`}
                            >
                              {item.title && item.title}
                            </span>

                            <p className="text-[#aaa]">
                              {item.description && item.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {item.svg && (
                        <div className="flex justify-start w-full px-6">
                          <div
                            className="w-21 h-21 rounded-full border border-[#53db78] flex items-center justify-center
                           bg-gradient-to-bl from-[#53db7778] to-[#001102]"
                          >
                            <span className="text-[#53db78] w-12 h-12">
                              {item.svg}
                            </span>
                          </div>
                        </div>
                      )}

                      <div
                        className={`w-full flex flex-col ${
                          item.svg ? "p-0 px-6 gap-y-1.5" : "p-6 gap-y-3.5"
                        } ${item.id === 2 ? "md:hidden" : "flex flex-col"}`}
                      >
                        <span className="text-[#53db78] text-xs font-medium">
                          {item.xsText && item.xsText}
                        </span>

                        <span
                          className={`text-white font-medium ${
                            item.id === 3 || item.id === 4
                              ? "text-base md:text-2xl"
                              : "text-2xl md:text-3xl"
                          }`}
                        >
                          {item.title && item.title}
                        </span>

                        <p className="text-[#aaa]">
                          {item.description && item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowBox>
              ))}
            </div>

            <CapabilitiesBoxes />
          </div>
        </section>

        <section
          id="HowItWorks"
          className="px-5 md:px-10 xl:px-0 pt-40 lg:pt-10 xl:container xl:mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-y-7.5 lg:hidden">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2.5">
                <span
                  className="text-[#53db78] font-bold font-mono text-sm
                  border border-[#53db78] rounded-md px-3.5 py-1.5 w-fit"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  How it works
                </span>

                <p
                  className="text-white font-semibold text-[2rem] md:text-5xl md:leading-14 leading-9"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  How we keep your company secured
                </p>
              </div>

              <p
                className="text-[#aaa] text-xl"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                No complexity. Just clean, effective protection in three simple
                steps.
              </p>

              <div data-aos="fade-up" data-aos-duration="600">
                <PrimaryButton
                  type="button"
                  text="Request demo"
                  className="w-full xs:w-auto px-6 py-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-5">
              {HowItWorkData.map((item) => (
                <GlowBox
                  key={item.id}
                  aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <div className="relative z-30 flex flex-col gap-y-2.5">
                    <div className="flex flex-col gap-y-2.5 p-6">
                      <p className="text-white font-medium text-base md:text-[22px]">
                        {item.title}
                      </p>

                      <p className="text-[#aaa]">{item.description}</p>
                    </div>

                    <img
                      loading="lazy"
                      src={item.iconSrc}
                      alt={`icon-${item.id}`}
                      className="block mx-auto w-58 xs:w-2/3"
                    />
                  </div>
                </GlowBox>
              ))}
            </div>
          </div>

          <FixedScroll />
        </section>

        <section id="Testimonials" className="pt-40 overflow-x-hidden">
          <div className="flex flex-col gap-y-7.5 md:gap-y-12 lg:gap-y-18">
            <div className="flex flex-col items-center gap-y-5 px-5 md:px-10 xl:px-0">
              <div className="flex flex-col gap-y-2.5">
                <span
                  className="text-[#53db78] font-bold font-mono text-sm mx-auto
                  border border-[#53db78] rounded-md px-3.5 py-1.5 w-fit"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Testimonials
                </span>

                <p
                  className="text-white font-semibold text-[2rem] md:text-5xl md:leading-14 leading-9 text-center
                  md:w-96 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Trusted by teams that move fast
                </p>
              </div>

              <p
                className="text-[#aaa] text-xl text-center"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Tech teams rely on our platform to stay protected while they
                scale.
              </p>
            </div>

            <TestimonialsBoxes />
          </div>
        </section>

        <section
          id="Pricing"
          className="px-5 md:px-10 xl:px-0 pt-40 xl:container xl:mx-auto overflow-hidden"
        >
          <div className="flex flex-col gap-y-7.5 md:gap-y-12 lg:gap-y-18">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2.5">
                <span
                  className="text-[#53db78] font-bold font-mono text-sm
                  border border-[#53db78] rounded-md px-3.5 py-1.5 w-fit"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Pricing
                </span>

                <p
                  className="text-white font-semibold text-[2rem] md:text-5xl md:w-125 md:leading-14 leading-9"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Serious Protection. Simple Pricing.
                </p>
              </div>

              <p
                className="text-[#aaa] text-xl md:w-96"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Pick the plan that fits your team. No hidden fees. No contracts.
                Just protection.
              </p>
            </div>

            <PricingWrapper />
          </div>
        </section>

        <section
          id="Contact"
          className="px-5 md:px-10 xl:px-0 pt-40 xl:container xl:mx-auto overflow-x-hidden"
        >
          <div className="flex flex-col gap-y-7.5 md:gap-y-12 lg:gap-y-18">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2.5">
                <span
                  className="text-[#53db78] font-bold font-mono text-sm 
                border border-[#53db78] rounded-md px-3.5 py-1.5 w-fit"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Contact
                </span>

                <p
                  className="text-white font-semibold text-[2rem] md:text-5xl md:leading-normal leading-9"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Stay aheads of threats
                </p>
              </div>

              <p
                className="text-[#aaa] text-xl"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Deploy in one click. No setup. No stress.
              </p>
            </div>

            <Contact />
          </div>
        </section>
      </main>

      <div className="mt-80 relative">
        <img
          loading="lazy"
          src={"/images/Footer/Footer-Image.svg"}
          alt="Footer-Image"
          className="mx-auto relative z-20 w-50 sm:w-96 md:w-auto"
        />

        <div
          className="w-10/12 md:w-150 h-full bg-[#53db78] absolute -translate-x-1/2 -translate-y-1/2 top-1/2
          left-1/2 z-10 blur-3xl"
        ></div>
      </div>

      <div className="flex flex-col">
        <div className="h-1 w-full bg-gradient-to-r from-[#000d01] via-[#53db78] to-[#000d01]"></div>
        <Footer />
      </div>
    </>
  );
}
