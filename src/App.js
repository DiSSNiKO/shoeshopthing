import Navbar from "./components/Navbar";
import Main from "./components/Main"
import CloakedImagesDisplay from "./components/CloakedImagesDisplay";
import { useState, useEffect } from "react";

// 1120px pirveli media tagistvis



function App() {
  const [isCloaked, setIsCloaked] = useState(true);
  const [focusedThumbnail, setFocusedThumbnail] = useState(1);
  return (
    <div className="App">
      <Navbar />
      <Main isCloaked={isCloaked} setIsCloaked={setIsCloaked} focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
      <CloakedImagesDisplay isCloaked={isCloaked} setIsCloaked={setIsCloaked} focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
    </div>
  );
}

export default App;
