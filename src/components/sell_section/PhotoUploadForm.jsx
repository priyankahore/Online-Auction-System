import React, { useState } from 'react';

function PhotoUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Read and display the selected image
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageURL(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here, and then you can display the image.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        {/* <div>
          <button type="submit">Upload Photo</button>
        </div> */}
      </form>
      {imageURL && (
        <div>
          <h6>Selected Photo:</h6>
          <img src={imageURL} alt="Selected" style={{ maxWidth: '100px', height:'100px' }} />
        </div>
      )}
    </div>
  );
}

export default PhotoUploadForm;

