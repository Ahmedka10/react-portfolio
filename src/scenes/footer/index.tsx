import { SelectedPage } from "@/shared/Types";

const Footer = () => {
  return (
    <footer className=" bg-deep-blue-100 border-t-2 border-gray-500 w-full mx-auto shadow">
      <div className="p-4 md:flex md:items-center md:mx-16 mx-11 md:justify-between">
        <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href={`#${SelectedPage.Home}`} className="hover:underline">
            Ahmedka10™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mx-4 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href={`#${SelectedPage.About}`}
              className="mr-4 hover:underline md:mr-6 "
            >
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href={`#${SelectedPage.Contact}`} className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
