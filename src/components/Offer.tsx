import Image from "next/image"
import CountDown from "./CountDown"


const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
          <h1 className="text-white text-5xl font-bold xl:text-6xl">
            Deliciosa hamburguesa y papas fritas
          </h1>
          <p className="text-white xl:text-xl">
            Promocion todo el mes de octubre pides 2 y de regalo una jarra de refresco
            o una gaseosa
          </p>
          <CountDown days={10} hours={10} minutes={10} seconds={10}/>
          <button className="bg-red-500 text-white rounded-md py-3 px-6">
            Ordena ahora
          </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="flex-1 w-full relative md:h-full">
            <Image src="/offerProduct.png" alt="" fill className="object-contain"/>
        </div>
    </div>
  )
}

export default Offer