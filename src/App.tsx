import { useState } from "react";
import BackCard from "./components/BackCard";
import Form from "./components/Form";
import FrontCard from "./components/FrontCard";
function App() {
  const [name, setName] = useState<string>('');

  console.log(name);
  
  return (
    <div className="mx-auto  rounded-md md:flex">
      <section className="bg-gradient-to-tr from-[#21092F] via-purple-900 to-purple-800 px-4 h-[250px] w-full mx-auto
      md:w-[400px] md:mx-0 md:h-screen md:flex md:flex-col-reverse md:justify-center md:space-y-4
      md:relative md:bg-gradient-to-tr
      flex justify-between flex-col
      ">
        <div className=" pt-[60px] pl-[3vw] self-end  md:absolute md:bottom-[30vh] md:left-[15vw]">
          <BackCard />
        </div>
        <div className=" z-10 mt-[-75px] ml-4 md:absolute md:top-[20vh] md:left-[10vw]">
          <FrontCard name={name}/>
        </div>
      </section>
      <main className="w-full  md:mx-auto  md:flex md:justify-end md:items-center">
        <Form setName={setName}/>
      </main>
    </div>
  );
}

export default App;
