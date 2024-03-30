import "../styles/form.css";
// types - interfaces for component
interface FormProps {
  setName: (name: string) => void;
  setNumber: (number: string) => void;
  setCount: (number: number) => void;
  setMonth: (number: string) => void;
  setYear: (number: string) => void;
  year: string;
  month: string;
  count: number;
  number: string;
}
const Form = ({
  setName,
  setNumber,
  setCount,
  count,
  number,
  setMonth,
  month,
  setYear,
  year,
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
  return (
    <form className="mt-28 px-[24px] md:mt-0 md:w-[60%] md:float-right xl:w-[380px] xl:float-none">
      <div className="mt-[20px] flex flex-col">
        <label className="label" htmlFor="name">
          Cardholder Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mt-[20px] flex flex-col">
        <label className="label" htmlFor="number">
          Card Number
        </label>
        <input
          id="number"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="input"
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
            {" "}
            <input
              type="number"
              id="date"
              placeholder="MM"
              className="input w-[90%]"
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
          </li>
          <li>
            {" "}
            <input
              type="number"
              placeholder="YY"
              className="input w-[90%]"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </li>
          <li>
            {" "}
            <input
              type="number"
              id="cvc"
              placeholder="e.g. 123"
              className="input w-[40vw] md:w-[10vw] xl:w-full"
            />
          </li>
        </ul>
      </div>
      <button
        type="submit"
        className="bg-[#21092F] text-white w-full mt-3 rounded-md py-1 mb-[10px]"
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;
