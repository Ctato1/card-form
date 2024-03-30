interface ValidCardProps{
    setValidate:(e:boolean)=>void;
}

const ValidCard = ({setValidate}:ValidCardProps) => {
  return (
    <section className="validate-card flex flex-col items-center gap-4 px-[24px] mt-28 sm:mt-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_0_524)" />
        <path
          d="M28 39.9199L36.0801 48L52.0801 32"
          stroke="white"
          stroke-width="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_524"
            x1="-23.0143"
            y1="11.5071"
            x2="1.03143e-06"
            y2="91.5071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6348FE" />
            <stop offset="1" stop-color="#610595" />
          </linearGradient>
        </defs>
      </svg>
        <h1 className="font-[500] text-[28px] tracking-[3.4px]">THANK YOU!</h1>
        <p className="font-[500] text-[18px] text-[#8F8694]">We’ve added your card details</p>
        <button className="bg-[#21092F] text-white w-full mt-3 rounded-md py-2 mb-[10px] duration-200 hover:bg-[#441b5bce]"
        onClick={()=>setValidate(false)}
        >Continue</button>
    </section>
  );
};

export default ValidCard;
