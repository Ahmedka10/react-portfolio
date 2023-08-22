// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import LineGradient from "@/shared/Linegradient";
import { motion } from "framer-motion";
import Person1 from "@/assets/person-1.png";
import Person3 from "@/assets/person-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Marry queen",
    description:
      "“I had an interest in React whilst I was in a previous job not using it at all, so I did the free YouTube version of your first React course and found it very useful! I then paid for the full thing, and I now have a job working with React, thanks Mosh!”",
    image: Person1,
  },
  {
    name: "John Deo",
    description:
      "“I had an interest in React whilst I was in a previous job not using it at all, so I did the free YouTube version of your first React course and found it very useful! I then paid for the full thing, and I now have a job working with React, thanks Mosh!”",
    image: Person3,
  },
  {
    name: "Lara Hevy",
    description:
      "“I had an interest in React whilst I was in a previous job not using it at all, so I did the free YouTube version of your first React course and found it very useful! I then paid for the full thing, and I now have a job working with React, thanks Mosh!”",
    image: Person3,
  },
  {
    name: "Lusio",
    description:
      "“I had an interest in React whilst I was in a previous job not using it at all, so I did the free YouTube version of your first React course and found it very useful! I then paid for the full thing, and I now have a job working with React, thanks Mosh!”",
    image: Person1,
  },
  {
    name: "Ibrahim ali",
    description:
      "“I had an interest in React whilst I was in a previous job not using it at all, so I did the free YouTube version of your first React course and found it very useful! I then paid for the full thing, and I now have a job working with React, thanks Mosh!”",
    image: Person3,
  },
];

type Props = {};

const index = ({}: Props) => {
  return (
    <section id="testimonial" className="w-5/6 mx-auto md:h-full pt-32">
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
          <p className="font-playfair font-semibold text-4xl uppercase">
            Test<span className=" text-secondary-500">mon</span>ials
          </p>
          <div className="flex justify-center mt-3">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-1 mb-10 capitalize">
          Maxy Dadku ka yidhaahdeen Shaqadaa wadno.
        </p>
      </motion.div>

      {/* testimonials */}
      <div className="md:flex mx-auto gap-8 text-center group">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1060: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
        >
          {/* testimonial One */}
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name} className="mb-8 duration-500">
              <div className="bg-white/10 cursor-pointer p-8 rounded-xl">
                <img
                  src={testimonial.image}
                  alt="person1"
                  className="h-20 mx-auto"
                />
                <h4 className="uppercase text-xl font-bold">
                  {testimonial.name}
                </h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                  {testimonial.description}
                </p>
                <button className="button-primary rounded-full">
                  Get in touch
                </button>
              </div>
            </SwiperSlide>
          ))}
          {/* Arrow btn */}
        </Swiper>
      </div>
    </section>
  );
};

export default index;
