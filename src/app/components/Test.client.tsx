"use client";

import { useState } from "react";

const TestClient: React.FC = () => {
  const [test, setTest] = useState(0);
  return (
    <div>
      <button onClick={() => setTest((t) => t + 1)}>Increment {test}</button>
    </div>
  );
};

export { TestClient };
