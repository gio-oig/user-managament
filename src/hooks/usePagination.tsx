import {
  mergeSortedArrays,
  range,
  removeDuplicates,
} from "src/utils/functions";

export const usePag = () => {
  function strip(arr: number[], total: number) {
    return arr.filter((num) => num >= 0 && num < total);
  }

  function generateClosets(total: number, activePage: number) {
    return strip([activePage - 1, activePage, activePage + 1], total);
  }

  function generateHeadAndTail(total: number) {
    return [...range(0, 2), ...range(total - 3, total - 1)];
  }

  function generateWithDots(total: number, active: number) {
    const headAndTail = generateHeadAndTail(total);
    const closestPages = generateClosets(total, active);
    const merged = mergeSortedArrays(headAndTail, closestPages);
    const uniques = removeDuplicates(merged);
    return uniques;
  }

  function generateWithoutDots(total: number) {
    return range(0, total - 1);
  }

  function addDots(arr: number[]) {
    const result: (number | "dots")[] = [];

    let tracker = arr[0] - 1;
    for (let i = 0; i < arr.length; i++) {
      if (tracker + 1 < arr[i]) {
        result.push("dots");
      }
      result.push(arr[i]);
      tracker = arr[i];
    }
    return result;
  }

  function generatePagesToShow(total: number, active: number) {
    let pageNumberArr: number[];
    if (total > 6) {
      pageNumberArr = generateWithDots(total, active);
    } else {
      pageNumberArr = generateWithoutDots(total);
    }
    return addDots(pageNumberArr);
  }

  return {
    generatePagesToShow,
  };
};
