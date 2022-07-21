<h1 align="center">E-commerce App</h1>

## Table of Contents

- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)

### Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [React Query](https://react-query.tanstack.com/)
- [Material-UI](https://mui.com/)

### Features

The features implemented are as follows:

- FeaturedProduct
  - One of the products should have a flag that it's a featured artwork.
  - It should be displayed above the product list.
- ProductList
  - The product list should contain 6 artworks.
  - After hovering over an image, you should display the "add to cart" bar.
  - Indicate the products that have the bestseller flag.
- AddToCart
  - After clicking on "Add to cart", the cart icon in the header should appear the badge with the counter of elements in the cart.
  - Each 'Add to cart' action should open the cart dropdown with items.
  - The cart dropdown should be also visible after clicking the basket icon in the header.
  - Clicking on the "Clear" button in the cart dropdown should remove items from the cart and hide the dropdown.
- Pagination
  - Products should be paginated. Show 6 items on each page.
  - The pagination should show the current page. Hide the 'prev' arrow on the first page and hide the 'next' arrow on the last page.
- WebPerformance
  - Optimise Your website using lighthouse reports. Try to achieve 80+ score in web core vitals. (mobile and desktop)

### How To Use

To run this application, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

- From the project directory, you can run:

```bash
# Install dependencies
$ npm install

# Start the database
$ npm run serve-json

# Run the App
$ npm start
```
