import React, { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { Menu } from "lucide-react";
import {
  Arrow90degRight,
  ArrowBarRight,
  ArrowRight,
  ArrowUpRight,
  X,
} from "react-bootstrap-icons";

const App = () => {
  const items = [
    { id: 1, label: "Component", icons: <ArrowUpRight /> },
    { id: 2, label: "Docs", icons: <ArrowUpRight /> },
    { id: 3, label: "Themes", icons: <ArrowUpRight /> },
    { id: 4, label: "Use Cases", icons: <ArrowUpRight /> },
    { id: 5, label: "Contact", icons: <ArrowUpRight /> },
  ];
  const [isOpen, setIsOpen] = useState("close");

  return (
    <div className="flex h-dvh relative items-center justify-center">
      {isOpen == "close" && (
        <motion.span
          layoutId="card"
          onClick={() => setIsOpen("open")}
          whileTap={{ scale: 0.98 }}
          className="border cursor-pointer border-neutral-300/100 rounded-xl p-3 shadow-xl"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Menu className="size-8 text-neutral-600/80" />
          </motion.span>
        </motion.span>
      )}
      <MotionConfig transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}>
        <AnimatePresence mode="popLayout">
          {isOpen == "open" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId="card"
              className="border-2 w-full gap-2.5 max-w-[20rem] flex text-left flex-col border-neutral-300/100 p-5 rounded-xl relative"
            >
              <span className="font-semibold text-[1.1rem] text-neutral-400/100">
                Menu
              </span>
              <motion.span
                onClick={() => setIsOpen("close")}
                className="border top-1 right-1 cursor-pointer absolute flex items-center justify-center size-7 rounded-full shadow-sm border-neutral-300/100 p-1"
              >
                <X className="text-neutral-600 size-5" />
              </motion.span>
              <AnimatePresence>
                <motion.div
                  exit={{ opacity: 0 }}
                  className="font-semibold relative text-[1.1rem] flex flex-col group gap-1.5"
                >
                  {items.map((item) => (
                    <>
                      <button
                        onClick={() => setIsOpen("close")}
                        className="flex items-center  cursor-pointer justify-between 
                bg-white p-3 group-hover:not-hover:blur-[2px] transition-normal duration-150 "
                      >
                        <span>{item.label}</span>
                        <span>{item.icons}</span>
                      </button>
                    </>
                  ))}
                </motion.div>
              </AnimatePresence>
              <motion.button
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen("close")}
                className="items-center flex justify-center gap-3.5 rounded-2xl cursor-pointer bg-neutral-900/100 text-white font-medium p-4"
              >
                <span>Get Started</span>
                <span>
                  <ArrowUpRight />
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};

export default App;
