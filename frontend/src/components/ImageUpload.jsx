import { useState } from "react";
export default function ImageUpload({ faceUrl, setStudent }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store selected image
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const apiKey = import.meta.env.VITE_IMG_API_KEY;
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(apiKey);

      const data = await response.json();
      if (data.success) {
        setStudent((prev) => ({
          ...prev,
          faceUrl: data.data.url, // Store uploaded image URL
        }));
      } else {
        alert("Image upload failed!");
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleImageChange} />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ok{" "}
      </button>

      {faceUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img
            src={faceUrl}
            alt="Uploaded"
            className="w-40 h-40 object-cover"
          />
          <p className="text-sm">{faceUrl}</p>
        </div>
      )}
    </div>
  );
}
