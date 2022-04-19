import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "./features/gallerySlice";

const App = () => {
  // const [picsData, setPicsData] = useState([]);
   const picsData=useSelector(state=>state.gallery.gallery);

  const dispatch=useDispatch()

  useEffect(() => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(getGallery(res.data)));
  }, []);

  return (
    <>
      <h1>Gallery</h1>
      <Form />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
