import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Cards from "../../assets/credit-cards.webp";
import { easeInOut, motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company details section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: easeInOut,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                minus labore. Quaerat quos soluta corporis in nihil delectus
                ratione atque dolore porro labore quasi nulla, aliquam sequi
                possimus suscipit cumque.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +234 901 527 8075
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaLocationDot />
                  Abuja , Nigeria
                </p>
              </div>
            </motion.div>

            {/* footer links section  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: easeInOut,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Quick link</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* social links  section  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: easeInOut,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-6">
                <FaFacebookF className="text-xl hover:scale-105 duration-300" />
                <FaInstagram className="text-xl hover:scale-105 duration-300" />
                <FaXTwitter className="text-xl hover:scale-105 duration-300" />
                <FiGithub className="text-xl hover:scale-105 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Method</p>
                <img src={Cards} alt="" className="w-[80%]" />
              </div>
            </motion.div>
          </div>
          {/* copyright section  */}
          <div className="border-t-2 mt-8">
            <p className="text-white text-center mt-8">
              &copy; A Cloned Web App, 2024 || Ikenna Mbaekwe Goodluck
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
