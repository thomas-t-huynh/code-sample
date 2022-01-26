export function sampleArray(arr) {
  if (!Array.isArray(arr)) {
    // eslint-disable-next-line no-throw-literal
    throw "Argument passed in is not an array!";
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
