import React, { useState } from "react";
import { ImImage,ImCheckboxChecked } from "react-icons/im";
import Gallerydata from "./Gallerydata";

const Gallery = () => {
  const [items, setItems] = useState(Gallerydata);
  const [selectedImages, setSelectedImages] = useState([]);


  // images selected
  const ImageSelection = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };


 // Remove the selected images from the items state
  const deleteSelectedImages = () => {
 
    const updatedItems = items.filter((item) => !selectedImages.includes(item.id));
    setItems(updatedItems);
    setSelectedImages([]);
  };

  return (
    <>
     <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
            <p><ImCheckboxChecked className="check-icon"/>{selectedImages.length} Files Selected</p>
   
           <button onClick={deleteSelectedImages}>Delete files</button>
        </div>
     
        <div className="image-container">
          {items.map((elem) => {
            const { id, imgsrc } = elem;
            const isSelected = selectedImages.includes(id);

            return (
              <div className="image" >
                  <img src={imgsrc} className="img-fluid" 
                  style={{ filter: isSelected ? "opacity(0.3)" : "none" }}/>
    
                   <input type="checkbox" class={`cardcheckbox ${isSelected ? "selected" : ""}`} align="right" key={id} onClick={() => ImageSelection(id)}  />
               </div>
            );
          })}

               {/* add image option */ }
                <div className="addImages">
                <ImImage className="icon"/>
                    <p>Add Images</p>
                </div>

        </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
