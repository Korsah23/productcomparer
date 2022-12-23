import "./Products.css";

function ProductCard() {
    
    return (
      <div className="card">
        <div className="image-section">
          <img src="https://images.pexels.com/photos/14794875/pexels-photo-14794875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className="product-info">
          <h3>Product Name</h3>
          <p>Price: Product Price</p>
          <p>Size: Product size</p>
          <p>Pdescription</p>
        </div>
      </div>
    );
  }

  export default ProductCard