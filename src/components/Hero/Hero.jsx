import { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

// import Headphone4 from "../../assets/headphone4.png";

const Hero = () => {
  const fadeUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
        scale: 0.5,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: easeInOut,
        },
      },
      exit: {
        opacity: 0,
        y: 50,
        scale: 0.5,
        transition: {
          duration: 0.2,
          ease: easeInOut,
        },
      },
    };
  };
  const headphoneData = [
    {
      id: 1,
      image: Headphone1,
      title: "Headphone Wireless",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat dignissimos cumque, officia odio iusto qui sit vitae ad.",
      price: "$100",
      modal: "Modal Brown",
      bgColor: "#8b5958",
    },
    {
      id: 2,
      image: Headphone2,
      title: "Headphone Wireless 2",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim animi tempore, possimus quod nisi et.",
      price: "$100",
      modal: "Line Green",
      bgColor: "#638153",
    },
    {
      id: 3,
      image: Headphone3,
      title: "Headphone Wireless 3",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta placeat est, alias tempore cupiditate quis, voluptatum beatae dicta odit quam unde consequatur iure tenetur recusandae dolores non magni nostrum.",
      price: "$100",
      modal: "Ocean Blue",
      bgColor: "#5d818c",
    },
  ];

  const [activeData, setActiveData] = useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Headphone Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference",
                    rotate: -720,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence>
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 4,
                    mixBlendMode: "difference",
                    rotate: -720,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    type="button"
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                    style={{ backgroundColor: activeData.bgColor }}
                  >
                    Buy and sell
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              {/* Headphone list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((phone) => {
                  return (
                    <AnimatePresence>
                      <UpdateFollower
                        mouseOptions={{
                          backgroundColor: phone.bgColor,
                          zIndex: 9999,
                          followSpeed: 0.5,
                          scale: 5,
                          text: "View Details",
                          textFontSize: "3px",
                        }}
                      >
                        <div
                          key={phone.id}
                          onClick={() => handleActiveData(phone)}
                          className="grid grid-cols-2 place-items-center cursor-pointer"
                        >
                          <div>
                            <img
                              src={phone.image}
                              alt={phone.title}
                              className="w-[200px]"
                            />
                          </div>
                          <div className="space-y-2">
                            <p className="text-base font-bold">{phone.price}</p>
                            <p className="text-xs font-normal text-nowrap">
                              {phone.modal}
                            </p>
                          </div>
                        </div>
                      </UpdateFollower>
                    </AnimatePresence>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero Image */}

          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                  transition: {
                    duration: 0.2,
                  },
                }}
                src={activeData.image}
                alt={activeData.title}
                className="w-[300px] md:w-[400px] xl:w-[550px]"
              />
            </AnimatePresence>
          </div>

          {/* whatsApp Icon */}
          <div className=" text-white fixed bottom-10 right-5 hover:rotate-[360deg] duration-500 z-[999999] mix-blend-difference text-4xl">
            <a href="https://wa.me/+2349162865922" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
