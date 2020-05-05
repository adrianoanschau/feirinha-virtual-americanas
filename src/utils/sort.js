export function sortBy(column) {
  return (a, b) => {
    a = parseInt(a[column], 10);
    b = parseInt(b[column], 10);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
}