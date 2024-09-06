import TabWidget from "./components/tabWidget";
import GalleryWidget from "./components/galleryWidget";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <TabWidget />
      <GalleryWidget />
    </div>
  );
}

export default App;
