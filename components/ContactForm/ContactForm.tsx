"use client";

import { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { FaCheck } from "react-icons/fa";

const ContactForm = () => {
  const [field, setField] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  const [check, setCheck] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      id="Contact-Form"
      className="flex flex-col gap-y-7.5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-y-1.5">
        <label htmlFor="name" className="text-white font-medium">
          Name
        </label>
        <input
          value={field.name}
          name={"name"}
          type="text"
          id="name"
          className="px-4 py-2 rounded-md border border-[#242424] focus:border-[#53db78] transition
          duration-200 text-[#aaa] font-medium outline-none"
          required
          minLength={3}
          maxLength={24}
          spellCheck={false}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-y-1.5">
        <label htmlFor="email" className="text-white font-medium">
          Email
        </label>
        <input
          value={field.email}
          name={"email"}
          type="email"
          id="email"
          className="px-4 py-2 rounded-md border border-[#242424] focus:border-[#53db78] transition
          duration-200 text-[#aaa] font-medium outline-none"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-y-1.5">
        <label htmlFor="message" className="text-white font-medium">
          Message
        </label>
        <textarea
          value={field.message}
          name={"message"}
          id="message"
          rows={15}
          className="textarea-scroll px-4 py-2 rounded-md border border-[#242424] focus:border-[#53db78] transition
          duration-200 text-[#aaa] font-medium outline-none resize-none bg-clip-padding"
          required
          minLength={12}
          spellCheck={false}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-x-1.5">
        <div className="relative h-5 w-5">
          <FaCheck
            className={`text-white text-xs absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            transition duration-200 ${check ? "opacity-100" : "opacity-0"}`}
          />
          <input
            type="checkbox"
            required
            className="relative z-20 w-5 h-5 border border-white rounded appearance-none
            checked:border-[#53db78] cursor-pointer"
            onClick={() => setCheck((prev) => !prev)}
          />
        </div>

        <span className="text-white text-[15px]">
          I accept the Terms & conditions.
        </span>
      </div>

      <PrimaryButton
        type="submit"
        text="Submit"
        className="px-6 py-3 w-auto md:w-fit"
      />
    </form>
  );
};

export default ContactForm;
