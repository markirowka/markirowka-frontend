/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./form";
import { FC, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface IFormSelectProps {
  className?: string;
  form: any;
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  hasFilter?: boolean;
}

export const FormSelect: FC<IFormSelectProps> = ({
  className = "",
  form,
  name,
  label,
  placeholder,
  options,
  hasFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredOptions = options.filter(
    (option) => option.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
  );

  useEffect(() => {
    function handleClickOutside(event: Event) {
	 const target = event.target as Element
      if (target && !target?.classList.contains("dropDownSelectOption")) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          {!hasFilter && (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((el, index) => {
                  return (
                    <SelectItem key={index} value={el}>
                      {el}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          )}
          {hasFilter && (
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsDropdownOpen(true)}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-300 rounded"
              />

              {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          field.onChange(option);
                          setSearchQuery(option);
                          setIsDropdownOpen(false);
                        }}
                        className="p-2 cursor-pointer hover:bg-gray-100 dropDownSelectOption"
                      >
                        {option}
                      </div>
                    ))
                  ) : (
                    <p className="p-2 text-gray-500">No options found</p>
                  )}
                </div>
              )}
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
