const PriceCard = ({ title, price, description, style, newClass }, props) => {
  let theme = "";

  switch (style) {
    case "transparent":
      theme = "border rounded-lg border-primary";
      break;
    case "primary":
      theme = "border rounded-lg border-primary bg-primary text-white";
      break;
    default:
      theme = "border rounded-lg border-primary";
      break;
  }

  return (
    <div
      className={`flex flex-col gap-5 py-3 justify-center items-center
       lg:w-96 lg:w-70 h-86 ${theme} ${newClass}`}
      {...props}
    >
      <div className="text-center flex flex-col gap-3">
        <p className="font-heading font-bold text-lg">{title}</p>
        <p className="font-heading font-bold text-3xl">{price}</p>
        <div className="font-body px-5">{description}</div>
      </div>
    </div>
  );
};

export default PriceCard;
