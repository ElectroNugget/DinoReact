/**
 * Acts as a panel displaying all the information on a product.
 * TODO: Could probably afford to be broken down a little.
 * TODO: Need to figure out how to get all the deets from the API.
 * TODO: Find a better way to handle adding objects to cart and pricing stuff...
 */
type ProductInfoProps = {
  description: string;
  era: string;
  manufacturer: string;
  dna: string;
  diet: string;
  size: string;
  length: string;
  height: string;
  weight: string;
  difficulty: string;
  price: string;
};

const ProductInfo = ({
  description,
  era,
  manufacturer,
  dna,
  diet,
  size,
  length,
  height,
  weight,
  difficulty,
  price,
}: ProductInfoProps): JSX.Element => (
  <div>
    <div className="productDescription">
      <h5>Description:</h5>
      <p>${description}</p>
    </div>
    <div className="productDetails">
      <h6>Manufacturer: {manufacturer}</h6>
      <h6>Era: {era}</h6>
      <h6>DNA Purity: {dna}</h6>
      <h6>Diet: {diet}</h6>
      <h6>Size Category: {size}</h6>
      <h6>Length: {length}</h6>
      <h6>Height: {height}</h6>
      <h6>Weight: {weight}</h6>
      <h6>Difficulty Rating: {difficulty}</h6>
    </div>
    <hr />
    <div className="productOptions">
      <h5>Buy Now:</h5>
      <h6>Quantity:</h6>
      <input id="quantityInput" type="number" value="1" min="1" max="10" />

      <h6>Price:</h6>
      <p
        id="invisiblePrice"
        //style="display:none"
      >
        {price}
      </p>
      <p id="priceDisplay">{price.toLocaleString()} USD</p>
      <button
        type="button"
        className="btn btn-primary" //onClick="addToCart()"
      >
        <i className="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  </div>
);

export default ProductInfo;
