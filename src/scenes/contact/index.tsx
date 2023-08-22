import LineGradient from "@/shared/Linegradient";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contactImage from "@/assets/contact-image.jpeg";
// import emailjs from "@emailjs/browser";

type FormData = {
  name: "";
  email: "";
  message: "";
};

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();

    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <section id="contact" className="w-5/6 mx-auto md:h-full py-24">
      {/* heading section */}
      <motion.div
        className="flex justify-end w-full"
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
          <div className="font-playfair font-semibold flex justify-center text-3xl uppercase">
            <p>
              <span className="text-secondary-300">Contact me</span>to get
              started
            </p>
          </div>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* Form section */}
      <div className="md:flex md:justify-between g-16 mt-5 ">
        <motion.div
          className="basis-[45%] flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImage} alt="contactImage" className="rounded-md" />
        </motion.div>

        <motion.div
          className="basis-[52%] mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            method="POST"
            action="https://formsubmit.co/ahmedkhadar700@gmail.com"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="w-full bg-primary-500 capitalize placeholder-gray-700 font-semibold p-3 rounded-xl"
              placeholder="name"
              {...register("name", {
                required: true,
                maxLength: 18,
              })}
            />
            {errors.name && (
              <p className="text-secondary-300 capitalize mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max Length is 18 chars."}
              </p>
            )}

            <input
              type="text"
              className="w-full bg-primary-500 capitalize placeholder-gray-700 font-semibold p-3 mt-5 rounded-xl  "
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-secondary-300 capitalize mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              rows={4}
              cols={50}
              className="w-full bg-primary-500 capitalize placeholder-gray-700 font-semibold p-3 mt-5 rounded-xl"
              placeholder="Message"
              {...register("message", {
                required: true,
                maxLength: 500,
              })}
            />
            {errors.message && (
              <p className="text-secondary-300 mt-1 capitalize">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length of message 500 chars."}
              </p>
            )}

            <button className="button-primary rounded-lg capitalize p-4 mt-5">
              send me a message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
