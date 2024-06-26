interface FrontCardProps{
  name:string;
  number:string;
  month:string;
  year:string;
}

const FrontCard = ({name,number,month,year}:FrontCardProps) => {
  return (
    <section className="rounded-md front-card p-[19px] bg-gradient-to-r from-[#21092F] via-purple-800 to-purple-900 
    max-w-[280px]
    md:w-[300px]
    ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="30"
        viewBox="0 0 54 30"
        fill="none"
      >
        <ellipse cx="15.0932" cy="15" rx="15.0932" ry="15" fill="white" />
        <path
          d="M53.5 15C53.5 18.4489 50.6859 21.25 47.2081 21.25C43.7302 21.25 40.9161 18.4489 40.9161 15C40.9161 11.5511 43.7302 8.75 47.2081 8.75C50.6859 8.75 53.5 11.5511 53.5 15Z"
          stroke="white"
        />
      </svg>
      <h1 className="pt-[37px] tracking-[2.2px] text-white md:text-[18px]">{number || '0000 0000 0000 0000'}</h1>
      <div className="flex justify-between items-center pt-[17px]">
        <p className="tracking-[1.2px] text-white text-[9px]">{name || 'JANE APPLESEED'}</p>
        <span className="tracking-[1.2px] text-white text-[9px]">{month || '00'}/{year || '00'}</span>
      </div>
    </section>
  );
};

export default FrontCard;
