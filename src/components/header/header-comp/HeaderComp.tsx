import LogoImg from "../../../assets/images/footer-logo.svg";
import DownArrowImg from "../../../assets/svg/downarrow.svg";
import { useNavigate } from "react-router-dom";
import { Example } from "./Example";
import { motion } from "framer-motion";

export default function HeaderComp() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex py-2 px-4 shadow-md bg-slate-50 justify-between items-center md:hidden">
        <Example />
      </div>

      <div className="hidden bg-[#49263D] bg-opacity-50 font-semibold tracking-wider md:flex md:justify-around md:items-center px-5 py-4 text-[#FFB600]">
        <div>
          <img className="w-2/3" src={LogoImg} alt="Logo" />
        </div>
        <div className="flex md:gap-12 lg:gap-32">
          <ul className="flex justify-center items-center gap-6">
            <li className="hover:cursor-pointer" onClick={() => navigate("/")}>
              HOME
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => navigate("aboutus")}
            >
              ABOUT US
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => navigate("events")}
            >
              EVENTS
            </li>
            <li
              className="hover:cursor-pointer flex justify-center items-center"
              onClick={() => navigate("activities")}
            >
              ACTIVITIES
              <img className="w-4" src={DownArrowImg} alt="Down Arrow" />
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => navigate("products")}
            >
              PRODUCTS
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => navigate("joinus")}
            >
              JOIN US
            </li>
          </ul>
          <ul className="flex">
            <div className="flex justify-center items-center md:gap-6 lg:gap-8">
              <li>
                <motion.button
                  className="px-6 py-1 bg-[#FCA120] rounded-full text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                  onClick={() => navigate("donate")}
                >
                  DONATE NOW
                </motion.button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
