/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../utils/imageUpload";

const AddRoom = () => {
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image")  
  const { user } = useAuth();
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const title = form.title.value;
    const category = form.category.value;
    const guests = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const price = form.price.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const host = {
      name: user?.displayName,
      img: user?.photoURL,
      email: user?.email,
    };
    const imageData = await imageUpload(image);
    const newRoomData = {
      location,
      title,
      category,
      guests,
      bedrooms,
      bathrooms,
      description,
      price,
      to,
      from,
      host,
      image: imageData?.data?.display_url,
    };
  };

  // handle date with react date range
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };

//   handle upload button text
const handleImageChange = (image)=>{
   
    setUploadButtonText(image.name)
}
  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        handleImageChange={handleImageChange}
        loading={loading}
        dates={dates}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};
export default AddRoom;
