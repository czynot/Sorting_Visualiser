export function getMergeAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const helperArray = array.slice();
    mergeHelper(array, 0, array.length - 1, helperArray, animations);
    return animations;
  }

function mergeHelper(
    mainArray,
    startIndex,
    endIndex,
    helperArray,
    animations,
  ) {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeHelper(helperArray, startIndex, middleIndex, mainArray, animations);
    mergeHelper(helperArray, middleIndex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleIndex, endIndex, helperArray, animations);
  }

function doMerge (
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    helperArray,
    animations,
) {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;
    while (i <= middleIndex && j <= endIndex) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (helperArray[i] <= helperArray[j]) {
          animations.push([k, helperArray[i]]);
          mainArray[k++] = helperArray[i++];
        } else {
          animations.push([k, helperArray[j]]);
          mainArray[k++] = helperArray[j++];
        }
      }
    while (i <= middleIndex) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, helperArray[i]]);
        mainArray[k++] = helperArray[i++];
      }
    while (j <= endIndex) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, helperArray[j]]);
        mainArray[k++] = helperArray[j++];
      }
}