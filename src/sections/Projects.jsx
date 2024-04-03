import React, { useContext, useEffect } from "react";
import "./Projects.css";
import MyContext from "../context/MyContext";
import { motion, useAnimation } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { fadeIn } from "../utils/motion";

const Projects = () => {
  const { data } = useContext(MyContext);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <section id="Projects" name="projects" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mb-14">
          <p className="text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline">
            Projects
          </p>
        </div>
        <motion.div
          // variants={fadeIn("up", "tween", 0.2, 1)}
          className="container Projects__container "
        >
          {data?.projects?.map((p, index) => {
            return (
              <article
                key={p._id}
                className="Projects__item border-gray-600 border-2"
              >
                <div className="Projects__item-image">
                  <img src={p?.image?.url} alt="" />
                </div>
                <h3 className=" font-semibold text-xl">{p?.title}</h3>
                <div className="Projects__item-cta">
                  <a href={p?.githuburl} className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={p?.liveurl}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
