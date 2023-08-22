import { EyeIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import LineGradient from "@/shared/Linegradient";
import Project1 from "@/assets/project-1.jpeg";
import Project2 from "@/assets/project-2.jpeg";
import Project3 from "@/assets/project-3.jpeg";
import Project4 from "@/assets/project-4.jpeg";
import Project5 from "@/assets/project-5.jpeg";
import Project6 from "@/assets/project-6.jpeg";
import { motion } from "framer-motion";

const Cards = [
  {
    name: "Website Ecommerce",
    image: Project1,
    category: "U/UX",
    date: "13h",
    view: "https://game-hub-sepia-zeta.vercel.app/",
    git: "https://github.com/AhmedKa10/game-hub",
  },
  {
    name: "Portfolio",
    category: "Web Apps",
    image: Project2,
    date: "8h",
    view: "",
    git: "",
  },
  {
    name: "Som Solutions",
    category: "ReactJs",
    image: Project3,
    date: "19h",
    view: "",
    git: "",
  },
  {
    name: "Bloger",
    category: "NextJs",
    image: Project4,
    date: "2h",
    view: "",
    git: "",
  },
  {
    name: "Somaliland News",
    category: "Somali Rebuplic",
    image: Project5,
    date: "23h",
    view: "",
    git: "",
  },
  {
    name: "Muslim World News",
    category: "Web developer",
    image: Project6,
    date: "17h",
    view: "",
    git: "",
  },
];

type Props = {};

const Projects = ({}: Props) => {
  return (
    <section id="projects" className="w-5/6 mx-auto pt-24">
      {/* heading section */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className=" text-secondary-500">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-3">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-1 mb-10 capitalize">
          Waa Projectska aanu sameysnay waad soo fiirsan kartaan.
        </p>
      </motion.div>

      {/* Projects */}
      <motion.div className="flex justify-center items-center">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Cards.map((card) => (
            <div key={card.name} className="cards">
              <img
                src={card.image}
                alt="project"
                className="h-1/2 w-full object-fill"
              />
              <div className="">
                {/* badge */}
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="badge">{card.category}</span>
                    <span className="badge1">{card.date}</span>
                  </div>
                </div>
                {/* Project Title */}
                <div className="px-4">
                  <h2 className="project-title">{card.name}</h2>
                  <div className="mt-10 flex justify-between gap-2">
                    <button className="button-primary rounded-full">
                      Get Started
                    </button>
                    <a
                      className="class-icon"
                      href={card.view}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GlobeAltIcon className="w-5 h-5" />
                    </a>
                    <a
                      className="class-icon"
                      href={card.git}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
