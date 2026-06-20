import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";
import logo from "../assets/logo.png";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <div className="hero-content">
          <span className="hero-badge">
            Premium Shopping Experience
          </span>

          <h1 className="home-title">
            Discover Premium Tech &
            Lifestyle Essentials
          </h1>

          <p className="home-subtitle">
            Curated products, seamless shopping,
            and quality you can trust.
          </p>
        </div>

      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}