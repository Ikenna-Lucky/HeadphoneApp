import Headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../Services/Services";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          {/* Banner img */}
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              src={Headphone4}
              alt=""
              className="  w-[300px] md:w[400px]"
            />
          </div>
          {/* Banner text */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphones With The Latest Technology
              </motion.h1>
              <motion.p
                variants={fadeUp(0.8)}
                initial="hidden"
                whileInView="show"
              >
                Lorem ipsum dolor sit abet consectetur adipisicing elit. Aut
                unde itaque explicate eveniet rerum delectus veniam laboriosam
                nostrum, atque accusals. Tenetur maxime rem, repudiandae
                voluptatum perferendis delectus nisi a fugit, praesentium,
                cumque enim? Fugit reprehenderit ex atque aliquam nam suscipit.
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 99,
                  followSpeed: 0.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <motion.button
                  variants={fadeUp(1.1)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white"
                >
                  Shop Now
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>

        {/* Banner Text */}
        <div className=" container text-center py-12 font-varela">
          <div className="bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "#000",
                zIndex: 9999,
                followSpeed: 0.5,
                scale: 10,
                mixBlendMode: "screen",
              }}
            >
              <p className="font-bold text-4xl max-w-[700px] mx-auto leading-normal">
                Headphone With Good Quality And Affordable Price
              </p>
            </UpdateFollower>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
