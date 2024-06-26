interface BackCardProps{
  cvc:string;
}
const BackCard = ({cvc}:BackCardProps) => {
  return (
    <section className="rounded-md back-card py-[14px]
    w-[280px]
    max-w-[280px]
    md:w-[300px]">
      <div className="bg-[#2F2F2F] h-[34px] "></div>
      <div className="bg-[#ADB5BE] mx-auto w-[80%]  px-[7px] py-[3px] mt-4 mb-[65px] rounded-sm text-[9px] text-white text-right">
        {cvc || '123'}
      </div>
    </section>
  );
};

export default BackCard;
