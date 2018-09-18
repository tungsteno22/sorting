describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2, 3, 4, 5])).toEqual(
      [[1, 2], [3, 4, 5]] || [[1, 2, 3], [4, 5]]
    );
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('MergeSort function', function() {
  it('is able to mergeSort one array', function() {
    // test the merging algorithm
    expect(mergeSort([1, 4, 5, 3, 2, 6, 7, 8])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ]);
    expect(mergeSort([1, 4, 5, 3, 6, 7, 9, 8, 2])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
});
