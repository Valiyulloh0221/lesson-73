import useCounter from "../states/useCounter";
import useLocation from "../states/useLocation";

const CounterPage = () => {
  const { counter, decrease, increase } = useCounter();
  const {
    counter: counter2,
    decrease: decrease2,
    increase: increase2,
  } = useCounter(2);
  const location = useLocation();
  console.log(location);
  return (
    <div className="text-center">
      <h1>Counter: {counter}</h1>
      <button className="btn btn-danger" onClick={decrease}>
        -
      </button>
      <button className="btn btn-success" onClick={increase}>
        +
      </button>
      <h1>Counter2: {counter2}</h1>
      <button className="btn btn-danger" onClick={decrease2}>
        -
      </button>
      <button className="btn btn-success" onClick={increase2}>
        +
      </button>
    </div>
  );
};

export default CounterPage;