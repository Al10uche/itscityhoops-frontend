import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const SelectList = ({ placeholder, options, className, onChange, value }) => {
  const [open, setOpen] = useState(false);
  // const [value, _] = useState(undefined);

  const handleSelectOption = (option) => {
    // _(option);
    setOpen(false);
    onChange(option.value);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={() => setOpen(!open)}
        className={`text-black px-4 py-2 bg-white text main-font flex items-center justify-between w-full capitalize
        ${
          open
            ? "rounded-t-2xl border-none"
            : "rounded-full border-2 border-yellow-300"
        }
       h-full`}
      >
        <span className="px-1">
          {value ? value : <span className="text-gray-400 capitalize">{placeholder}</span>}
        </span>
        {open ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
      </div>
      {open && (
        <div
          className="fixed w-dvw h-dvh bg-transparent z-20 top-0 left-0 right-0 bottom-0"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {open === true && (
        <div
          className={`absolute top-full left-0 right-0 w-full bg-white block max-h-80 overflow-auto  z-50
        ${open ? "rounded-b-2xl" : "rounded-none"}
        `}
        >
          {options && options.length > 0 && (
            <div
              className={`w-full flex flex-col  text-black 
            `}
            >
              {options.map((option, index) => (
                <button
                  onClick={() => handleSelectOption(option)}
                  className={`w-full border p-2 hover:bg-yellow-300 text-left px-5 flex-1 bg-white rounded-md
                  ${
                    index === options.length - 1
                      ? "rounded-b-2xl"
                      : "rounded-none"
                  }
                  `}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectList;
