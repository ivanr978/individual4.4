// sort.js

export function sortData(data, criterion) {
  return data.slice().sort((a, b) => {
    if (a[criterion] < b[criterion]) {
      return -1;
    }
    if (a[criterion] > b[criterion]) {
      return 1;
    }
    return 0;
  });
}
