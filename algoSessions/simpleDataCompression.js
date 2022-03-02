// run length encoding - a way to compress data by looking for repetition in the data
// we're going to pretend we're compressing an image - repetitive data is the pixel RBG values
// eg: pixel: [255, 255, 255], [255, 255, 255], [255, 255, 0], [0, 0, 255]
// RLE packet: {runLength: 2, color: [255, 255, 255]}, {runLength: 1, color: [255, 255, 0]}, {runLength: 1, color: [0, 0, 255]}
// for more complex data it can actually increase the file size, but for images it works quite well

function compress(imageArr) {
  let compressedImageArr = [];
  let counter = 1;

  for (let i = 0; i < imageArr.length; i++) {
    if (imageArr[i].toString() === imageArr[i + 1].toString()) {
      counter++;
    } else {
      compressedImageArr.push({
        runLength: counter,
        color: imageArr[i],
      });
      counter = 1;
    }
  }

  return compressedImageArr;
}

console.log(
  compress([
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [1, 255, 255],
  ])
);

