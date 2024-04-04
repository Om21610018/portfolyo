import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";

import { textVariant } from "../utils/motion";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const ExperienceCard = ({ company_name, jobTitle, startDate, endDate }) => (
  <VerticalTimelineElement
    contentStyle={{
      background:
        "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,0.7694607843137255) 100%)", // Dark gradient background
      color: "#ffffff", // Text color
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px", // Shadow
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {new Date(startDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          -{" "}
          {new Date(endDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h3>
      </div>
    }
    iconStyle={{ background: "" }}
    icon={
      <div className="flex bg-black rounded-full justify-center items-center w-full h-full"></div>
    }
  >
    <div cl>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {jobTitle}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { data } = useContext(MyContext);
  return (
    <>
      <motion.div
        name="experience"
        className="section w-full"
        variants={textVariant()}
      >
        <p className="text-2xl lg:text-4xl font-bold border-b-4  border-yellow p-2 inline">
          Experience
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {data?.timeline?.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
