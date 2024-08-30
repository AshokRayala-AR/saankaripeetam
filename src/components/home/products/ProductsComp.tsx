import { ProductsData } from "./ProductsData";
import { motion } from "framer-motion";


function ProductsComp() {
  return (
    <div className="flex flex-col justify-center items-center p-20 gap-12">

        <p className="text-[#44233B] text-4xl font-semibold">Our Products</p>

        <div className="grid grid-cols-4 gap-2 w-full h-full "> 
            {ProductsData.map((item, idx) => {
                return(
                    <div key={idx} className="w-5/6 p-2 flex flex-col justify-around items-center border-2 rounded-xl gap-2">

                        <img src={item.img} alt="img" className="w-5/6" />

                        <div className="flex flex-col justify-center items-center gap-1">
                            <p className="text-[#44233B] text-lg font-medium">{item.title}</p>
                            <p className="text-[#DB4242] font-semibold">₹{item.price}</p>
                        </div>

                        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="p-2 bg-[#7E4555] rounded-xl px-4 text-white">Add to Cart</motion.button>

                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default ProductsComp;
