import BackCard from "./components/BackCard";
import Form from "./components/Form";
import FrontCard from "./components/FrontCard";
function App() {
  return (
    <div className="mx-auto  rounded-md md:flex">
      <section className="bg-gradient-to-r from-[#21092F] via-purple-800 to-purple-900 px-4 h-[250px] w-full mx-auto
      md:w-[400px] md:mx-0 md:h-screen md:flex md:flex-col-reverse md:justify-center md:space-y-4
      md:relative
      ">
        <div className="relative pt-[60px] pl-[3vw]  md:absolute md:bottom-[30vh] md:left-[15vw]">
          <BackCard />
        </div>
        <div className="relative z-10 mt-[-75px] md:absolute md:top-[20vh] md:left-[10vw]">
          <FrontCard />
        </div>
      </section>
      <main className="mt-[75px] sm:mt-4 xl:mt-0 xl:w-[600px]  xl:mx-auto  xl:flex xl:justify-center xl:items-center">
        <Form />
      </main>
    </div>
  );
}

export default App;
