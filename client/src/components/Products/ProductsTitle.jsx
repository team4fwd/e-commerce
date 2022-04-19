const ProductsTitle = ({ title }) => {
  return (
    <div className='products__title'>
      <h2>{title}</h2>
      <div className='products__filter'>
        <select className='products__filter-sort'>
          <option value='price'>Default</option>
          <option value='price'>By Price</option>
          <option value='price'>By Sale</option>
          <option value='price'>By rating</option>
          <option value='price'>By popolar</option>
        </select>
        <select className='products__filter-sort'>
          <option value='price'>Default Sort</option>
          <option value='price'>By Sale</option>
          <option value='price'>By rating</option>
          <option value='price'>By popolar</option>
        </select>
      </div>
    </div>
  );
};
export default ProductsTitle;
