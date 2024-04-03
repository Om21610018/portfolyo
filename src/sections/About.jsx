// import AboutSkillsCard from "../components/AboutSkillsCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
// import { aboutBlock } from "../data/data";
import aboutImg from "../assets/images/artificial-intelligence.jpg";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const About = () => {
  const { data } = useContext(MyContext);
  return (
    <section name="about" className="section">
      <div className="">
        <p className="text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline">
          About
        </p>
       
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full lg:h-screen flex flex-col lg:flex-row justify-around items-center gap-6 py-10 md:py-16 mx-auto mt-14 xl:mt-20 px-2 md:px-4"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="relative w-full
          flex-[0.5] lg:max-w-[400px]
          flex
          justify-center
          items-center"
        >
          <img
            src={aboutImg}
            alt="about"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="w-full -scroll-ml-52 lg:h-[610px] overflow-y-auto h-auto flex-1 flex flex-col lg:justify-between gap-3 lg:gap-4 sm:p-8 xl:p-12 p-4 rounded-[32px] relative border-[1px] border-dark-grey scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        >
          {data?.services?.map((service, index) => (
            <div className="flex justify-center">
              <div
                className="xs:w-full  border-white
                 border-2  sm:w-5/6 rounded-lg py-3 px-3 hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-800"
              >
                <div className="relative h-16">
                  <div className="w-full  z-10">
                    <p className="font-secondary font-semibold text-3xl tracking-wider">
                      {index + 1}
                    </p>
                    <p className="font-primary font-semibold text-2xl mt-[5px] tracking-[0.3rem]">
                      {service?.name}
                    </p>
                  </div>
                </div>
                <p className="font-primary mt-3 lg:text-[13px] text-justify">
                  {service?.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
