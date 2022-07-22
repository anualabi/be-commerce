import { RiArrowUpDownLine } from 'react-icons/ri';
import { StyledSortForm } from './styles';

interface ISortProduct {
  sortType: string;
  handleSortBy: (e: string) => void;
  handleOrderBy: () => void;
}

const SortProduct = ({ sortType, handleSortBy, handleOrderBy }: ISortProduct) => {
  return (
    <StyledSortForm>
      <form>
        <label htmlFor="sort" onClick={handleOrderBy}>
          <RiArrowUpDownLine />
          Sort By
        </label>
        <select
          name="sort"
          id="sort"
          value={sortType}
          onChange={(e) => handleSortBy(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="name">Alphabet</option>
        </select>
      </form>
    </StyledSortForm>
  );
};

export default SortProduct;
