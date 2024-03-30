import "../styles/form.css";
// types - interfaces for component
interface FormProps {
  setName: (name: string) => void;
  setNumber: (number: string) => void;
  setCount: (number: number) => void;
  count: number;
  number: string;
}
const Form = ({ setName, setNumber, setCount, count, number }: FormProps) => {
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
        <label className="label" htmlFor="name">Cardholder Name</label>
        <input
        id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mt-[20px] flex flex-col">
        <label className="label" htmlFor="number">Card Number</label>
        <input
        id="number"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="input"
          value={number}
          onKeyUpCapture={(e) => {
            if (e.key === "Backspace") {
              setNumber(number.split('').slice(0, -1).join(''));
            }
          }}
          onChange={(e) => { checkNumber(e)}}
        />
      </div>

      <div className="mt-[20px] flex flex-col">
        <div className="flex gap-3">
          <label className="label" htmlFor="date">Exp. Date (MM/YY)</label>
          <label className="label" htmlFor="cvc">CVC</label>
        </div>
        <ul className="flex justify-between gap-2 w-full">
          <li className="">
            {" "}
            <input type="text" id="date" placeholder="MM" className="input w-[90%]" />
          </li>
          <li>
            {" "}
            <input type="text" placeholder="YY" className="input w-[90%]" />
          </li>
          <li>
            {" "}
            <input
              type="text"
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
