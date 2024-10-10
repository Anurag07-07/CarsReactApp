import Card from "./Card";

function Cars(props) {
  // Destructure both data and Buy from props
  const { data, Buy } = props;

  return (
    <div>
      <div>
        <h1 className="border flex justify-center items-center text-4xl font-semibold p-5">
          SUPERCARS DETAILS
        </h1>
      </div>
      <div className="flex flex-wrap">
        {data.map((car) => {
          // Pass car details and Buy function to the Card component
          return <Card {...car} key={car.id} Buy={Buy} />;
        })}
      </div>
    </div>
  );
}

export default Cars;
