export const formatPrice = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number);
};

export const getLastPageNumber = (str: string) => {
  const urls = str.split(',');
  const lastUrl = urls.find((str) => str.includes('rel="last"'));

  return lastUrl
    ? Number((lastUrl.match(/_page=(\d+)/gi) as string[])[0].split('=').pop())
    : undefined;
};
