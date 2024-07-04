import Image from "next/image";
import Button from "../(component)/Button";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="relative h-[32rem] overflow-hidden">
        <Image
          src="/assets/foto2.jpg"
          fill
          alt={`img`}
          className={`absolute top-0 left-0 w-full h-full object-cover 
          }`}
        />
        <div className="absolute w-full bg-black h-[32rem] opacity-30"></div>
        <div className="absolute top-0 left-12 lg:left-52">
          <div className="flex flex-col justify-center items-start h-[32rem] w-full">
            <p className="font-heading font-bold text-5xl lg:text-7xl leading-tight text-white">
              AMELIE BRIDAL
            </p>
            <p className="font-body text-white mr-10">
              Dapatkan paket bridal lengkap yang berkualitas tinggi serta harga
              yang terjangkau
            </p>
            <br />

            <Button title="Hubungi Kami" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
