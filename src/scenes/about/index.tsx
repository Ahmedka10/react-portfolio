import useMediaQuery from "@/hooks/useMediaQuery";
import LineGradient from "@/shared/Linegradient";
import { motion } from "framer-motion";
import SkillsImage from "@/assets/skills-image.png";

type Props = {};

const index = ({}: Props) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="w-5/6 mx-auto md:h-full pt-2">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-[7rem]">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className=" text-secondary-500">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src={SkillsImage} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={SkillsImage} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-1 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue-600 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 capitalize">
            Ma u Baahan tahay website ecommerce, blogs ama portfolio let's
            talk..
          </p>
        </motion.div>

        {/* Digital marketing */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Digital Marketar
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow-300 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 capitalize">
            Waxaan ku shaqeeya digital marketingka noocyada kala duwan uu
            leeyahay sida:- Social Media,SEO & email marketing.
          </p>
        </motion.div>

        {/* Data Analytics */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Data Anlystic
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-secondary-300 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 capitalize">
            niyada maku haysaa ina bilowdo ganacsi midho dhal leh inaad abuurto
            nala soo xidhiidh si aanu kaga caawino ganacsigaaga adoo helaya
            fa'idadaada wakhti kooban{" "}
            <span className="text-red-400">Data-</span>
            <span className="text-blue-400">Anlysis</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default index;
