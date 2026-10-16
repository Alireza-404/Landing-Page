"use client";

import { ContactAccordionData } from "@/data/ContactAccordionData";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const ContactAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-y-5">
      {ContactAccordionData.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="border border-[#242424] rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex justify-between items-center px-5 py-4 text-white cursor-pointer text-start
              gap-x-2.5"
            >
              <span className="font-semibold">{item.title}</span>
              <span
                className={`text-white text-2xl transition duration-200 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                <BiPlus />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-4 text-[#aaa]">
                    {item.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default ContactAccordion;
