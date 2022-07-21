import { RiArrowUpDownLine } from 'react-icons/ri';
import { StyledSortForm } from './styles';

interface ISortProduct {
  value: string;
  handleSort: (e: string) => void;
  toggleSort: () => void;
}

const SortProduct = ({ value, handleSort, toggleSort }: ISortProduct) => {
  return (
    <StyledSortForm>
      <form>
        <label htmlFor="sort" onClick={toggleSort}>
          <RiArrowUpDownLine />
          Sort By
        </label>
        <select
          name="sort"
          id="sort"
          className="sort-products"
          value={value}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="name">Alphabet</option>
        </select>
      </form>
    </StyledSortForm>
  );
};

export default SortProduct;
