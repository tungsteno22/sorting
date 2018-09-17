describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('Compares values the correct number of times', function() {
    spyOn(window, 'swapper').and.callThrough();
    window.bubbleSort([3, 2, 4]);
    expect(window.swapper.calls.count()).toEqual(3);
  });
});
