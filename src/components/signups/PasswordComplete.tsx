import signinimg from "../../assets/images/signinimg.png";
import backbtn from "../../assets/svg/backbtn.svg"

function PasswordComplete() {
 
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="w-full md:w-3/6 h-1/5 md:h-full "
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col md:w-3/6  justify-center items-center gap-8 p-8 md:p-12 lg:p-24 relative">
      <button type="button" className="absolute left-2 top-2 md:left-6 lg:left-12 md:top-6"><img src={backbtn} alt="backbtn" className="w-6"/></button>
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-8 md:mt-0">
          <p className="text-3xl font-semibold">All Done!</p>
          <p className="text-lg font-normal text-[#666]">
            Your Password has been reset.
          </p>
        </div>

        <p className="text-lg font-normal ">
            Re-Direct to{" "}
            <a href="#" className="font-semibold text-[#FFA12B] underline underline-offset-2 "> SignIn Page</a>
          </p>

        

            
      </div>
    </div>
  );
}

export default PasswordComplete;
