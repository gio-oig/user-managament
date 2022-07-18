export function sleep(delay: number) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export function capitalize(str: string) {
  return str[0].toUpperCase().concat(str.slice(1));
}

export function isString(val: unknown): val is string {
  return typeof val === "string" || val instanceof String;
}

export function isAdmin(role: string) {
  return role.toLocaleLowerCase().includes("admin");
}

export function range(start: number, end: number) {
  const arr: number[] = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

export function mergeSortedArrays(arr1: number[], arr2: number[]) {
  const smallArr = arr1.length > arr2.length ? arr2 : arr1;
  const largeArr = arr1.length > arr2.length ? arr1 : arr2;

  const res: number[] = [];
  let i = 0;
  let j = 0;
  for (; i < smallArr.length; ) {
    if (smallArr[i] < largeArr[j]) {
      res.push(smallArr[i]);
      i++;
    } else if (smallArr[i] > largeArr[j]) {
      res.push(largeArr[j]);
      j++;
    } else {
      res.push(smallArr[i]);
      i++;
      j++;
    }
  }

  return res.concat(largeArr.slice(smallArr.length));
}

export function removeDuplicates(arr: number[]) {
  // @ts-ignore
  return [...new Set(arr)];
}
