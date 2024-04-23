import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Menu />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const menuItems = [
  {
    path: "/",
    label: "Homepage",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contacts",
    label: "Contacts",
  },
];

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Here you run the code for the side effects
    setIsVisible(false);
  }, [location]); // dependencies array

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)} className="menu-toggle">
        {isVisible ? "hide" : "show"}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="backdrop"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            onClick={() => setIsVisible(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="menu"
            initial={{
              transform: "translateX(-100%)",
            }}
            animate={{
              transform: "translateX(0%)",
            }}
            exit={{
              transform: "translateX(-100%)",
            }}
          >
            <ul>
              {menuItems.map((item, index) => {
                return (
                  <motion.li key={index}>
                    <Link to={item.path}>{item.label}</Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
