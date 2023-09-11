import { useEffect, useState } from "react";

const TimeFunction = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);
  return (
    <>
      <p>{time}</p>
    </>
  );
};
export default TimeFunction;
