import "../styles/form.css";
interface FormProps {
  setName: (name: string) => void;
}
const Form = ({ setName }: FormProps) => {
  return (
    <form className="mt-28 px-[24px] md:mt-0 md:w-[60%] md:float-right xl:w-[380px] xl:float-none">
      <div className="mt-[20px] flex flex-col">
        <label className="label">Cardholder Name</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mt-[20px] flex flex-col">
        <label className="label">Card Number</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="input"
        />
      </div>

      <div className="mt-[20px] flex flex-col">
        <div className="flex gap-3">
          <label className="label">Exp. Date (MM/YY)</label>
          <label className="label">CVC</label>
        </div>
        <ul className="flex justify-between gap-2 w-full">
          <li className="">
            {" "}
            <input type="text" placeholder="MM" className="input w-[90%]" />
          </li>
          <li>
            {" "}
            <input type="text" placeholder="YY" className="input w-[90%]" />
          </li>
          <li>
            {" "}
            <input
              type="text"
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
