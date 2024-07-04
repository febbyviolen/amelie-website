import { fotoSatuanPrice } from "@/public/static/Prices";
import { cucicetakPrice } from "@/public/static/Prices";

const AlaCarteSection = () => {
  return (
    <div className="py-20 px-10 flex flex-col gap-10 lg:px-52">
      <div className="flex flex-col gap-2">
        <p className="font-heading text-3xl font-bold">ALA CARTE</p>
        <p className="font-body">Kami menyediakan beragam macam service</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-20">
        <div className="flex flex-col lg:w-2/4 gap-5">
          <p className="font-heading text-3xl font-bold">FOTO SATUAN</p>
          <div className="flex flex-col gap-2">
            {fotoSatuanPrice.map((price, idx) => (
              <div
                className="flex flex-row justify-between font-body"
                key={idx}
              >
                <p>{price.title}</p>
                <p>{price.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-2/4">
          <p className="font-heading text-3xl font-bold">FOTO SATUAN</p>
          <div className="flex flex-col gap-2">
            {cucicetakPrice.map((price, idx) => (
              <div
                className="flex flex-row justify-between font-body"
                key={idx}
              >
                <p>{price.title}</p>
                <p>{price.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlaCarteSection;
