import Image from "next/image";

const Service = ({ iconURL, height, width, title, description }, props) => {
  return (
    <div
      className={`flex flex-col gap-8 justify-center items-center
     border rounded-lg border-primary lg:w-96 lg:w-70 h-72`}
      {...props}
    >
      <Image
        src={iconURL}
        alt="url"
        height={height || 40}
        width={width || 40}
      />
      <div className="text-center flex flex-col gap-2">
        <p className="font-heading font-bold text-xl">{title}</p>
        <p className="font-body px-5">{description}</p>
      </div>
    </div>
  );
};

export default Service;
