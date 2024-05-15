import Clock from "./Clock";

//if we don't get any unique identifier as key, then create one using Math.random()
/*export default function ClockList({quantities = []}){
    return (
        <div>
            {quantities.map(() => (
                <Clock key={Math.random()}/>
            ))}
        </div>
    );
}*/

// eslint-disable-next-line react/prop-types
export default function ClockList({ quantities = [] }) {
  return (
    <div>
      {quantities.map((key) => (
        <Clock key={key} />
      ))}
    </div>
  );
}

//keys don't need to be unique globally
/*export default function ClockList({quantities = []}){
    return (
        <>
        <div>
            {quantities.map((key) => (
                <Clock key={key}/>
            ))}
        </div>
        <div>
            {quantities.map((key) => (
                <Clock key={key}/>
            ))}
        </div>
        </>
    );
}*/
