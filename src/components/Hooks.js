import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} from "react";

const Button = React.memo(function({ callback, label }) {
  console.log("Rendered Button");
  const style = {
    padding: "10px 30px",
    border: "1px solid white",
    fontSize: "24px"
  };
  return (
    <button style={style} onClick={callback}>
      {label}
    </button>
  );
});

function complexFunction(compute) {
  console.log("Computations");
  return "comuted";
}

function useInterval(delay) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Effect executed");
    const timer = setInterval(function() {
      setCounter(c => c + 1);
    }, delay);
    return () => {
      console.log("Effect cleanup");
      clearInterval(timer);
    };
  }, [delay]);
  const reset = useCallback(function reset() {
    setCounter(0);
  }, []);
  return [counter, reset];
}

export default function({ compute }) {
  const [counter, reset] = useInterval(1000);
  const nbRenders = useRef(0);
  const computed = useMemo(() => complexFunction(compute), [compute]);
  nbRenders.current++;
  return (
    <>
      <Button callback={reset} label="Reset" />
      <h1> Counter: {counter}</h1>
      <h2> Renders: {nbRenders.current}</h2>
      <h2> Computed: {computed}</h2>
    </>
  );
}
