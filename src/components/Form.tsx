import { useEffect, useState } from "react";
import "../styles/form.css";
import { SubmitHandler, useForm } from "react-hook-form";
import ValidCard from "./ValidCard";
// types - interfaces for component
interface FormProps {
  setName: (name: string) => void;
  setNumber: (number: string) => void;
  setCount: (number: number) => void;
  setMonth: (number: string) => void;
  setYear: (number: string) => void;
  setCvc: (number: string) => void;
  year: string;
  month: string;
  count: number;
  number: string;
}
type FormField = {
  name: string;
  number: string;
  date: string;
  year: string;
  cvc: string;
};
const Form = ({
  setName,
  setNumber,
  setCount,
  count,
  number,
  setMonth,
  month,
  setYear,
  setCvc,
}: FormProps) => {
  function checkNumber(e: React.ChangeEvent<HTMLInputElement>) {
    // stop after 16
    if (
      e.target.value
        .split("")
        .filter((el) => el !== " ")
        .join("").length > 16
    ) {
      return;
    }
    // no string
    const containsOnlyNumbers = /^[\d\s*]+$/.test(e.target.value);
    if (containsOnlyNumbers) {
      setNumber(e.target.value);
      setCount(count + 1);
    }
  }

  const [validate, setValidate] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>();

  const onSubmit: SubmitHandler<FormField> = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setValidate(true);
    } catch (error) {
      // setError('name',{
      //   message:'This email is already taken'
      // })
    }
  };
  useEffect(() => {
    if (!validate) {
      setName("");
      setNumber("");
      setCount(0);
      setMonth("");
      setYear("");
      setCvc("");
      document.querySelectorAll("input").forEach((item) => (item.value = ""));
    }
  }, [validate]);

  return !validate ? (
    <form
      className="mt-28 px-[24px] md:mt-0 md:w-[60%] md:float-right xl:w-[380px] xl:float-none"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt-[20px] flex flex-col">
        <label className="label" htmlFor="name">
          Cardholder Name
        </label>
        <input
          {...register("name", {
            required: "Can’t be blank",
            validate: (value) => {
              if (!/^[A-Za-z\s]+$/.test(value)) {
                return "Name must be valid";
              }
              if (value.length < 4) {
                return "Name is too short";
              }

              return true;
            },
          })}
          id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className={`input ${
            errors.name ? "border-solid border-2 border-[#FF5050]" : ""
          }`}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <div className="text-red-600 text-[12px]">{errors.name.message}</div>
        )}
      </div>

      <div className="mt-[20px] flex flex-col">
        <label className="label" htmlFor="number">
          Card Number
        </label>
        <input
          id="number"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className={`input ${
            errors.number ? "border-solid border-2 border-[#FF5050]" : ""
          }`}
          {...register("number", {
            required: "Can’t be blank",
            validate: (value) => {
              if (
                value
                  .split("")
                  .filter((el) => el !== " ")
                  .join("").length < 16
              ) {
                return "Wrong format, NUmber must be 16";
              }
              return true;
            },
          })}
          value={number}
          onKeyUpCapture={(e) => {
            if (e.key === "Backspace") {
              setNumber(number.split("").slice(0, -1).join(""));
            }
          }}
          onChange={(e) => {
            checkNumber(e);
          }}
        />
        {errors.number && (
          <div className="text-red-600 text-[12px]">
            {errors.number.message}
          </div>
        )}
      </div>

      <div className="mt-[20px] flex flex-col">
        <div className="flex gap-3">
          <label className="label" htmlFor="date">
            Exp. Date (MM/YY)
          </label>
          <label className="label" htmlFor="cvc">
            CVC
          </label>
        </div>
        <ul className="flex justify-between gap-2 w-full">
          <li className="">
            <input
              type="number"
              id="date"
              placeholder="MM"
              className={`input w-[90%] ${
                errors.date ? "border-solid border-2 border-[#FF5050]" : ""
              }`}
              {...register("date", {
                required: "Can’t be blank",
              })}
              onChange={(e) => {
                if (+e.target.value > 12) {
                  e.target.value = "";
                  setMonth("");
                }
                if (month.length < 2) {
                  setMonth(e.target.value);
                } else {
                  e.target.value = "";
                  setMonth("");
                }
              }}
            />
            {errors.date && (
              <div className="text-red-600 text-[12px]">
                {errors.date.message}
              </div>
            )}
          </li>
          <li>
            {" "}
            <input
              type="number"
              placeholder="YY"
              className={`input w-[90%] ${
                errors.date ? "border-solid border-2 border-[#FF5050]" : ""
              }`}
              {...register("year", {
                required: "Can’t be blank",
              })}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            {errors.year && (
              <div className="text-red-600 text-[12px]">
                {errors.year.message}
              </div>
            )}
          </li>
          <li>
            {" "}
            <input
              type="number"
              id="cvc"
              placeholder="e.g. 123"
              className={`input w-[40vw] md:w-[10vw] xl:w-full ${
                errors.date ? "border-solid border-2 border-[#FF5050]" : ""
              }`}
              {...register("cvc", {
                required: "Can’t be blank",
              })}
              onChange={(e) => {
                if (e.target.value.length > 3) {
                  setCvc("");
                  e.target.value = "";
                }
                setCvc(e.target.value);
              }}
            />
            {errors.cvc && (
              <div className="text-red-600 text-[12px]">
                {errors.cvc.message}
              </div>
            )}
          </li>
        </ul>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#21092F] text-white w-full mt-3 rounded-md py-2 mb-[10px] duration-200 hover:bg-[#441b5bce]"
      >
        {isSubmitting ? "Loading" : "Confirm"}
      </button>
    </form>
  ) : (
    <ValidCard setValidate={setValidate} />
  );
};

export default Form;
