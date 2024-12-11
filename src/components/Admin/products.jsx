import React, { useState, useEffect } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    title: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    sizes: {
      small: false,
      medium: false,
      large: false,
    },
    colors: [],
    date: "",
    bestseller: false,
    quantity: 0, // Add quantity to track stock levels
    image: null,  // This will hold the image file
  });
  const [showForm, setShowForm] = useState(false); // state to toggle form visibility

  // Fetch products from the Flask API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://127.0.0.1:5000/get_products');
      const data = await response.json();
      console.log(data); // Add this to verify the fetched data
      setProducts(data);
    };
    fetchProducts();
  }, []);
  

  const handleColorChange = (e, color) => {
    setNewProduct((prevProduct) => {
      let updatedColors = [...prevProduct.colors];
      if (e.target.checked) {
        updatedColors.push(color);
      } else {
        updatedColors = updatedColors.filter((item) => item !== color);
      }
      return { ...prevProduct, colors: updatedColors };
    });
  };

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle checkbox change for sizes
  const handleSizeChange = (e) => {
    const { name, checked } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      sizes: {
        ...prevProduct.sizes,
        [name]: checked,
      },
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const { files } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      image: files[0], // Store the file
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append all form fields except "image" and "sizes"
    Object.keys(newProduct).forEach((key) => {
      if (key !== "image" && key !== "sizes") {
        formData.append(key, newProduct[key]);
      }
    });

    // Append sizes (convert the boolean values to strings)
    Object.keys(newProduct.sizes).forEach((size) => {
      formData.append(size, newProduct.sizes[size].toString());
    });

    // Append the image file
    formData.append("image", newProduct.image);

    console.log("Adding product:", newProduct);

    fetch("http://127.0.0.1:5000/add_product", {
      method: "POST",
      body: formData, // Send formData instead of JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);

        alert(data.message);
        setNewProduct({
          name: "",
          title: "",
          description: "",
          price: "",
          category: "",
          subCategory: "",
          sizes: { small: false, medium: false, large: false },
          colors: [],
          date: "",
          bestseller: false,
          quantity: 0,
          image: null,
        });
        setShowForm(false);
        fetch("http://127.0.0.1:5000/get_products")
          .then((response) => response.json())
          .then((data) => setProducts(data));
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Manage Products</h1>

      <button
        onClick={() => setShowForm(true)}
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition mb-4"
      >
        Add New Product
      </button>

      {showForm && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
                className="p-2 border rounded-md shadow-sm w-full md:w-1/2"
              />
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={newProduct.title}
                onChange={handleInputChange}
                required
                className="p-2 border rounded-md shadow-sm w-full md:w-1/2"
              />
            </div>

            <textarea
              name="description"
              placeholder="Product Description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
              className="p-2 border rounded-md shadow-sm w-full"
            />

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2">
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
                className="p-2 border rounded-md shadow-sm w-full md:w-1/2"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProduct.category}
                onChange={handleInputChange}
                required
                className="p-2 border rounded-md shadow-sm w-full md:w-1/2"
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2">
              <input
                type="text"
                name="subCategory"
                placeholder="Subcategory"
                value={newProduct.subCategory}
                onChange={handleInputChange}
                className="p-2 border rounded-md shadow-sm w-full md:w-1/2"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                className="p-2 border rounded-md shadow-sm w-full md:w-1/2"
              />
            </div>

            {/* Sizes checkboxes */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">Sizes:</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="checkbox"
                    name="small"
                    checked={newProduct.sizes.small}
                    onChange={handleSizeChange}
                    className="h-3 w-5"
                  />
                  Small
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="medium"
                    checked={newProduct.sizes.medium}
                    onChange={handleSizeChange}
                    className="h-3 w-5"
                  />
                  Medium
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="large"
                    checked={newProduct.sizes.large}
                    onChange={handleSizeChange}
                    className="h-3 w-5"
                  />
                  Large
                </label>
              </div>
            </div>

            {/* Colors checkboxes */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">Colors:</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="checkbox"
                    name="light"
                    checked={newProduct.colors.includes("Light")}
                    onChange={(e) => handleColorChange(e, "Light")}
                    className="h-3 w-5"
                  />
                  Light
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="dark"
                    checked={newProduct.colors.includes("Dark")}
                    onChange={(e) => handleColorChange(e, "Dark")}
                    className="h-3 w-5"
                  />
                  Dark
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="custom"
                    checked={newProduct.colors.includes("Custom")}
                    onChange={(e) => handleColorChange(e, "Custom")}
                    className="h-3 w-5"
                  />
                  Custom
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm">Bestseller:</label>
              <input
                type="checkbox"
                name="bestseller"
                checked={newProduct.bestseller}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    bestseller: e.target.checked,
                  })
                }
                className="h-5 w-5"
              />
            </div>

            {/* Image upload input */}
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              required
              className="p-2 border rounded-md shadow-sm w-full"
            />

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Product
            </button>
          </form>
        </div>
      )}

      {/* Table to display products */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Existing Products</h2>
        <table className="min-w-full table-auto border-collapse">
  <thead>
    <tr>
      <th className="px-4 py-2 border">Name</th>
      <th className="px-4 py-2 border">Price</th>
      <th className="px-4 py-2 border">Quantity</th>
      <th className="px-4 py-2 border">Category</th>
      <th className="px-4 py-2 border">Subcategory</th>
      <th className="px-4 py-2 border">Action</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id} className="hover:bg-gray-100">
        <td className="px-4 py-2 border">{product.name}</td>
        <td className="px-4 py-2 border">{product.price} Rs</td>
        <td className="px-4 py-2 border">{product.quantity}</td>
        <td className="px-4 py-2 border">{product.category}</td>
        <td className="px-4 py-2 border">{product.sub_category}</td>
        <td className="px-4 py-2 border">
          <button 
            className="text-blue-600 hover:text-blue-800 mr-4" 
            onClick={() => handleUpdate(product.id)}
          >
            Update
          </button>
          <button className="text-red-600" onClick={() => handleDelete(product.id)}>
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  );
};

export default ManageProducts;
