import * as React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
