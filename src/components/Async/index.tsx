import { useEffect, useState } from 'react';

export const Async = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello Async Component</div>
      {isButtonVisible && <button>Click Me</button>}
    </div>
  );
};
