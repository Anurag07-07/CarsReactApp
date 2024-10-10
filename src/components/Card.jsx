import { useState } from "react";

function Card(props) {
  const { id, name, info, image, price, Buy } = props;
  const [readmore, setMore] = useState(false);

  function readmoreHandler() {
    setMore(!readmore);
  }

  const description = readmore ? info : `${info.substring(0, 200)}...`;

  return (
    <div className="border w-[50vw]">
      {/* Image with alt text for better accessibility */}
      <img
        src={image}
        alt={`${name}`}
        className="w-full hover:scale-105 h-[50vh] p-4 rounded-3xl transition-all duration-700"
      />
      <div className="p-4 flex flex-col gap-y-3">
        <div>
          <h2 className="text-3xl font-semibold">{name}</h2>
          <h2 className="text-2xl font-extralight">{price}</h2>
        </div>
        <div className="text-[1.1rem] font-light">
          {description}
          {/* Add cursor-pointer for the read more link */}
          <span className="text-blue-600 cursor-pointer" onClick={readmoreHandler}>
            {readmore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      {/* Add cursor-pointer to Buy button */}
      <button
        className="px-7 ml-4 py-3 mb-3 rounded-2xl border-x-4 bg-slate-500 cursor-pointer"
        onClick={() => Buy(id)}
      >
        Buy
      </button>
    </div>
  );
}

export default Card;