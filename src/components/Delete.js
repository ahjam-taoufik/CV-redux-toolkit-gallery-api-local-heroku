import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteGallery } from "../features/gallerySlice";

const Delete = ({ id }) => {
  const dispatch=useDispatch()
  const handleDelete = () => {
    axios.delete("http://localhost:5000/pictures/" + id).then(
        dispatch(deleteGallery(id))
    )
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
