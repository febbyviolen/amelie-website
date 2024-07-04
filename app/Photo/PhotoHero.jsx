import Image from "next/image";
import Button from "../(component)/Button";

const PhotoHero = () => {
  return (
    <div className="w-full relative">
      <div className="relative h-[20rem] lg:h-[32rem] overflow-hidden">
        <Image
          src="/assets/photo_hero.jpg"
          alt="image"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute w-full bg-black h-[20rem] lg:h-[32rem] opacity-30"></div>
        <div className="absolute top-0 left-12 lg:left-52">
          <div className="flex flex-col gap-5 justify-center items-start h-[20rem] lg:h-[32rem] w-full">
            <div className="flex flex-col gap-2">
              <p className="font-heading font-bold text-3xl lg:text-7xl leading-tight text-white">
                FOTO STUDIO AMELIE
              </p>
              <p className="font-body text-white">
                Foto studio indoor terbaik di Palembang
              </p>
            </div>
            <a href="https://wa.me/+62811785130" target="_blank">
              <Button title="Hubungi Kami" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoHero;
