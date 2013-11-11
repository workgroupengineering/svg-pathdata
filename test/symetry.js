var assert = chai.assert;

describe("X axis symetry", function() {

  it("should work with an arbitrary path", function() {
    assert.equal(new SVGPathData(
      'm12.5 140c0 0 7.63017 -32.95472 17.21798 -45.085701c0 0 8.60793 -7.043235 12.91188 -7.630171c4.30396 -0.586937 31.109058 -1.173872 31.109058 -1.173872l8.021699 -9.821022h3.717026l1.173872 -15.810194l-3.521618 -3.717024l-1.564688 -9.782503l0.586937 -4.50008h1.760808c0 0 1.138927 -12.71791 0.977752 -14.0879c-0.160463 -1.36928 4.911579 -16.18532 17.628774 -18.17648c12.71719 -1.99188 35.0336 10.50851 35.0336 10.50851l-1.20525 21.55903l-2.34775 6.65242l1.36928 0.39153c0 0 -0.1954 3.71702 -1.76081 6.260173c0 0 -2.15233 10.760974 -7.63017 10.956382l-4.30467 12.521783l-3.71703 4.109267l-2.93468 8.607922l14.67341 17.80493l1.17387 10.36944c0 0 8.52734 7.60521 6.31794 20.04214h-124.68722z'
    ).ySymetry(150).encode(),
      'm12.5 10c0 0 7.63017 32.95472 17.21798 45.085701c0 0 8.60793 7.043235 12.91188 7.630171c4.30396 0.586937 31.109058 1.173872 31.109058 1.173872l8.021699 9.821022h3.717026l1.173872 15.810194l-3.521618 3.717024l-1.564688 9.782503l0.586937 4.50008h1.760808c0 0 1.138927 12.71791 0.977752 14.0879c-0.160463 1.36928 4.911579 16.18532 17.628774 18.17648c12.71719 1.99188 35.0336 -10.50851 35.0336 -10.50851l-1.20525 -21.55903l-2.34775 -6.65242l1.36928 -0.39153c0 0 -0.1954 -3.71702 -1.76081 -6.260173c0 0 -2.15233 -10.760974 -7.63017 -10.956382l-4.30467 -12.521783l-3.71703 -4.109267l-2.93468 -8.607922l14.67341 -17.80493l1.17387 -10.36944c0 0 8.52734 -7.60521 6.31794 -20.04214h-124.68722z');
  });

  it("should work when reversed", function() {
    assert.equal(new SVGPathData(
      'm12.5 140c0 0 7.63017 -32.95472 17.21798 -45.085701c0 0 8.60793 -7.043235 12.91188 -7.630171c4.30396 -0.586937 31.109058 -1.173872 31.109058 -1.173872l8.021699 -9.821022h3.717026l1.173872 -15.810194l-3.521618 -3.717024l-1.564688 -9.782503l0.586937 -4.50008h1.760808c0 0 1.138927 -12.71791 0.977752 -14.0879c-0.160463 -1.36928 4.911579 -16.18532 17.628774 -18.17648c12.71719 -1.99188 35.0336 10.50851 35.0336 10.50851l-1.20525 21.55903l-2.34775 6.65242l1.36928 0.39153c0 0 -0.1954 3.71702 -1.76081 6.260173c0 0 -2.15233 10.760974 -7.63017 10.956382l-4.30467 12.521783l-3.71703 4.109267l-2.93468 8.607922l14.67341 17.80493l1.17387 10.36944c0 0 8.52734 7.60521 6.31794 20.04214h-124.68722z'
    ).ySymetry(150).ySymetry(150).encode(),
      'm12.5 140c0 0 7.63017 -32.95472 17.21798 -45.085701c0 0 8.60793 -7.043235 12.91188 -7.630171c4.30396 -0.586937 31.109058 -1.173872 31.109058 -1.173872l8.021699 -9.821022h3.717026l1.173872 -15.810194l-3.521618 -3.717024l-1.564688 -9.782503l0.586937 -4.50008h1.760808c0 0 1.138927 -12.71791 0.977752 -14.0879c-0.160463 -1.36928 4.911579 -16.18532 17.628774 -18.17648c12.71719 -1.99188 35.0336 10.50851 35.0336 10.50851l-1.20525 21.55903l-2.34775 6.65242l1.36928 0.39153c0 0 -0.1954 3.71702 -1.76081 6.260173c0 0 -2.15233 10.760974 -7.63017 10.956382l-4.30467 12.521783l-3.71703 4.109267l-2.93468 8.607922l14.67341 17.80493l1.17387 10.36944c0 0 8.52734 7.60521 6.31794 20.04214h-124.68722z');
  });

});
