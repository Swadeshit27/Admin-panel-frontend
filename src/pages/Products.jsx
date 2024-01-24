// Products.jsx

import React, { useState } from "react";
import Modal from "react-modal";
import Layout from "../Components/Layout";
import "./Products.css"; // Import the CSS file for styling

const Products = () => {
  // State to manage modals, form data, and selected product for editing
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    photo: null,
    description: "",
    category: "",
    price: "",
    discount: "",
  });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isImageUpdated, setIsImageUpdated] = useState(false);

  // Dummy data for the products table
  const [productsData, setProductsData] = useState([
    { id: 1, productName: "Product 1", photo: "image1.jpg", description: "Description 1", category: "Category 1", price: 50, discount: 10 },
    { id: 2, productName: "Product 2", photo: "image2.jpg", description: "Description 2", category: "Category 2", price: 30, discount: 5 },
    // Add more products as needed
  ]);

  // Function to handle form submission (add or edit product)
  const handleFormSubmit = () => {
    if (selectedProductId !== null) {
      // Update existing product
      const updatedProducts = productsData.map((product) =>
        product.id === selectedProductId
          ? {
              ...product,
              ...formData,
              photo: isImageUpdated ? URL.createObjectURL(formData.photo) : product.photo,
            }
          : product
      );
      setProductsData(updatedProducts);
    } else {
      // Add new product
      const newProduct = {
        id: productsData.length + 1,
        ...formData,
        photo: formData.photo ? URL.createObjectURL(formData.photo) : null,
      };
      setProductsData([...productsData, newProduct]);
    }

    // Clear form data, close the modal, and reset image update state
    setFormData({
      productName: "",
      photo: null,
      description: "",
      category: "",
      price: "",
      discount: "",
    });
    setSelectedProductId(null);
    setIsImageUpdated(false);
    setIsEditModalOpen(false);
  };

  // Function to handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
    setIsImageUpdated(true); // Set image update state to true
  };

  // Function to handle product edit
  const handleEditProduct = (product) => {
    setFormData({ ...product });
    setSelectedProductId(product.id);
    setIsImageUpdated(false); // Reset image update state
    setIsEditModalOpen(true);
  };

  // Function to handle product delete
  const handleDeleteProduct = (productId) => {
    const updatedProducts = productsData.filter((product) => product.id !== productId);
    setProductsData(updatedProducts);
  };

  // Function to handle opening the photo modal
  const handleOpenPhotoModal = (product) => {
    setFormData({ ...product });
    setIsPhotoModalOpen(true);
  };

  // Function to handle closing the photo modal
  const handleClosePhotoModal = () => {
    setIsPhotoModalOpen(false);
  };

  return (
    <Layout header="Products">
      {/* Add New Product Button */}
      <button onClick={() => setIsEditModalOpen(true)}>Add New Product</button>

      {/* Products Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>
                <img
                  src={product.photo}
                  alt={product.productName}
                  style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  onClick={() => handleOpenPhotoModal(product)}
                />
              </td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Product Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Add New Product"
      >
        <h2>{selectedProductId !== null ? "Edit Product" : "Add New Product"}</h2>
        <div className="product-form-container">
          <form className="product-form">
            {/* Form fields go here */}
            <label>
              Product Name:
              <input
                type="text"
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              />
            </label>
            {/* Photo field with file input */}
            <label>
              Photo:
              <input
                type="file"
                accept="image/*" // Specify that only image files are allowed
                onChange={(e) => handleFileChange(e)}
              />
            </label>
            {/* Add other form fields as needed */}
            <label>
              Description:
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </label>
            <label>
              Discount:
              <input
                type="text"
                value={formData.discount}
                onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
              />
            </label>

            <button type="button" onClick={handleFormSubmit}>
              {selectedProductId !== null ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>
      </Modal>

      {/* Photo Modal */}
      <Modal
        isOpen={isPhotoModalOpen}
        onRequestClose={handleClosePhotoModal}
        contentLabel="Product Photo"
      >
        {formData.photo && (
          <img
            src={formData.photo}
            alt={formData.productName}
            style={{ maxWidth: "100%" }}
          />
        )}
      </Modal>
    </Layout>
  );
};
export default Products;
