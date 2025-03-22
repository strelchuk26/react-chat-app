import React, { forwardRef } from "react";

interface CustomInputProps {
    className?: string;
    placeholder?: string;
    type?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ className, placeholder, type = "text",  ...rest }, ref) => {
      return (
        <div>
          <div className={`${className} p-3 gap-2 flex-1 bg-dark-grey-transperent flex items-center rounded-xl`}>
            <input
              ref={ref}
              type={type}
              style={{ backgroundColor: "transparent" }}
              className="flex-1 border-none outline-none text-white placeholder-gray-400"
              placeholder={placeholder}
              {...rest}
            />
          </div>
        </div>
      );
    }
  );

export default CustomInput;
