import Navbar from "./components/Navbar";
import Main from "./components/Main"
import CloakedImagesDisplay from "./components/CloakedImagesDisplay";
import { useEffect, useState } from "react";

// 1120px pirveli media tagistvis



function App() {
  const [isCloaked, setIsCloaked] = useState(true);
  const [focusedThumbnail, setFocusedThumbnail] = useState(1);
  const [focusedThumbnailCloak, setFocusedThumbnailCloak] = useState(1);
  useEffect(()=>{
    //wake me up before you go go
    setFocusedThumbnailCloak(focusedThumbnail);
  }, [focusedThumbnail]);
  return (
    <div className="App">
      <Navbar />
      <Main isCloaked={isCloaked} setIsCloaked={setIsCloaked} 
      focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} 
      setFocusedThumbnailCloak={setFocusedThumbnailCloak} />
      <CloakedImagesDisplay isCloaked={isCloaked} setIsCloaked={setIsCloaked} 
      focusedThumbnailCloak={focusedThumbnailCloak} setFocusedThumbnailCloak={setFocusedThumbnailCloak} 
      focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
    </div>
  );
}

export default App;
