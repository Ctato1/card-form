import { useEffect, useState } from "react";
import BackCard from "./components/BackCard";
import Form from "./components/Form";
import FrontCard from "./components/FrontCard";
function App() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  useEffect(() => {
 
    
    if (number.split('').filter(item=> item !==' ').join('').length % 4 === 0 && number.length > 0){
      setNumber(prev=> prev.split('').concat(' ').join(''));
    }
    
    
  }, [count]);

 
  return (
    <div className="mx-auto  rounded-md md:flex">
      <section
        className="
      bg-resp
      md:bg-desk
      w-full mx-auto
      md:w-[400px] md:mx-0 md:h-screen md:flex md:flex-col-reverse md:justify-center md:space-y-4
      md:relative 
      flex justify-between flex-col
      "
      >
        <div className=" pt-[60px] pl-[3vw] self-end  md:absolute md:bottom-[30vh] md:left-[15.5vw]">
          <BackCard cvc={cvc}/>
        </div>
        <div className=" z-10 mt-[-75px] ml-4 md:absolute md:top-[20vh] md:left-[10vw]">
          <FrontCard name={name} number={number} month={month} year={year}/>
        </div>
      </section>
      <main className="  md:mx-auto  md:flex md:justify-end md:items-center">
        <Form setName={setName} setNumber={setNumber} number={number} setCount={setCount} count={count} setMonth={setMonth} month={month}  setYear={setYear} year={year} setCvc={setCvc}/>
      </main>
    </div>
  );
}

export default App;
