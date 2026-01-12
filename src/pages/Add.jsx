import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { useState } from "react";
import axios from "axios";
import backendUrl from "../../config/api";
import { toast } from "react-toastify";

const Add = () => {
  const [images, setImages] = useState([null, null, null, null]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubitHandler = async (e) => {
    e.preventDefault();
    if (loading) return;
    //VALIDATION: at least one image
    if (!images[0]) {
      toast.error("Please upload at least one image");
      return;
    }

    //VALIDATION: at least one size
    if (sizes.length === 0) {
      toast.error("Please select at least one size");
      return;
    }
    //VALIDATION: at least some price
    if (price === '0') {
      toast.error("Please select at least some price");
      return;
    }


    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const formdata = new FormData();

      formdata.append("name", name);
      formdata.append("description", description);
      formdata.append("price", price);
      formdata.append("category", category);
      formdata.append("subCategory", subCategory);
      formdata.append("bestseller", bestseller ? "true" : "false");
      formdata.append("sizes", JSON.stringify(sizes));

      if (images[0]) formdata.append("image1", images[0]);
      if (images[1]) formdata.append("image2", images[1]);
      if (images[2]) formdata.append("image3", images[2]);
      if (images[3]) formdata.append("image4", images[3]);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formdata,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setBestseller(false);
        setSizes([]);
        setImages([null, null, null, null]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubitHandler} className="space-y-8 max-w-3xl">
      {/* Upload Images */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Upload Images <span className="text-red-500">*</span>
        </p>

        <div className="flex gap-4">
          {images.map((image, index) => (
            <label
              key={index}
              htmlFor={`image${index}`}
              className="flex h-28 w-28 cursor-pointer flex-col items-center justify-center
                 rounded-md border border-dashed border-gray-300
                 hover:border-gray-500 overflow-hidden"
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={assets.upload_area}
                    alt="Upload"
                    className="h-8 w-8 opacity-60"
                  />
                  <span className="mt-1 text-xs text-gray-500">Upload</span>
                </>
              )}

              <input
                type="file"
                id={`image${index}`}
                hidden
                required={index === 0}
                onChange={(e) => {
                  const files = [...images];
                  files[index] = e.target.files[0];
                  setImages(files);
                }}
              />
            </label>
          ))}
        </div>

        <p className="mt-1 text-xs text-gray-500">
          First image is mandatory. PNG recommended.
        </p>
      </div>

      {/* Product Name */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-1">
          Product Name <span className="text-red-500">*</span>
        </p>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Type here"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>

      {/* Product Description */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-1">
          Product Description
        </p>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="Write content here"
          rows={4}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>

      {/* Category / Subcategory / Price */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </p>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
            className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Sub Category <span className="text-red-500">*</span>
          </p>
          <select
            onChange={(e) => {
              setSubCategory(e.target.value);
            }}
            value={subCategory}
            className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Price <span className="text-red-500">*</span>
          </p>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            type="number"
            placeholder="0"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Product Sizes <span className="text-red-500">*</span>
        </p>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <span
              onClick={(e) => {
                sizes.includes(size)
                  ? setSizes(sizes.filter((s) => s !== size))
                  : setSizes([...sizes, size]);
              }}
              key={size}
              className={`cursor-pointer rounded-md border px-3 py-1 text-sm ${
                sizes.includes(size)
                  ? ` bg-red-100 border-red-500`
                  : `text-gray-700 hover:bg-gray-300`
              }`}
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          onChange={(e) => {
            setBestseller(e.target.checked);
          }}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="h-4 w-4 cursor-pointer rounded border-gray-300
               accent-gray-900"
        />
        <label
          htmlFor="bestseller"
          className="cursor-pointer text-sm text-gray-700"
        >
          Add to bestseller
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={`rounded-md px-6 py-2 text-sm font-semibold text-white
    ${
      loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900"
    }`}
      >
        {loading ? "Adding..." : "ADD"}
      </button>
    </form>
  );
};

export default Add;
