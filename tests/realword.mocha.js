/* eslint max-len:0 */
'use strict';

const assert = require('chai').assert;
const { SVGPathData } = require('..');

describe('Dealing with real world commands', () => {

  it('and Y axis symmetry with y coords equal to 0', () => {
    assert.equal(new SVGPathData('M250,381 C199.119048,381 151.285714,361.164188 115.333333,325.159688 L165.857143,274.653375 C188.333333,297.156188 218.238095,309.5625 250,309.5625 C298.214286,309.5625 341.333333,280.797 359.904762,236.291438 L369.071429,214.3125 L500,214.3125 L500,285.75 L415,285.75 C381.285714,344.304937 318.880952,381 250,381 L250,381 L250,381 L250,381 Z M130.952381,166.6875 L0,166.6875 L0,95.25 L85.047619,95.25 C118.738095,36.6950625 181.142857,0 250,0 C300.880952,0 348.714286,19.8358125 384.690476,55.8403125 L334.166667,106.346625 C311.690476,83.8438125 281.809524,71.4375 250,71.4375 C201.833333,71.4375 158.666667,100.203 140.119048,144.708563 L130.952381,166.6875 L130.952381,166.6875 L130.952381,166.6875 L130.952381,166.6875 Z M130.952381,166.6875')
      .ySymmetry(381).ySymmetry(381).encode()
      , 'M250 381C199.119048 381 151.285714 361.164188 115.333333 325.159688L165.857143 274.653375C188.333333 297.156188 218.238095 309.5625 250 309.5625C298.214286 309.5625 341.333333 280.797 359.904762 236.291438L369.071429 214.3125L500 214.3125L500 285.75L415 285.75C381.285714 344.304937 318.880952 381 250 381L250 381L250 381L250 381zM130.952381 166.6875L0 166.6875L0 95.25L85.047619 95.25C118.738095 36.695062500000006 181.142857 0 250 0C300.880952 0 348.714286 19.835812499999975 384.690476 55.84031249999998L334.166667 106.34662500000002C311.690476 83.84381250000001 281.809524 71.4375 250 71.4375C201.833333 71.4375 158.666667 100.20299999999997 140.119048 144.708563L130.952381 166.6875L130.952381 166.6875L130.952381 166.6875L130.952381 166.6875zM130.952381 166.6875');
  });

  it('of sapegin', () => {
    assert.equal(
      new SVGPathData('M77.225 66.837l-18.895-18.895c2.85-4.681 4.49-10.177 4.49-16.058 0-17.081-14.802-31.884-31.888-31.884-17.082 0-30.932 13.85-30.932 30.934s14.803 31.885 31.885 31.885c5.68 0 11-1.538 15.575-4.21l18.996 18.997c1.859 1.859 4.873 1.859 6.73 0l4.713-4.711c1.859-1.86 1.185-4.2-.674-6.058m-67.705-35.903c0-11.828 9.588-21.416 21.412-21.416 11.83 0 22.369 10.539 22.369 22.367s-9.588 21.416-21.417 21.416c-11.825 0-22.364-10.539-22.364-22.367')
        .toAbs().ySymmetry(79).encode(),
      'M77.225 12.162999999999997L58.33 31.057999999999993C61.18 35.73899999999999 62.82 41.23499999999999 62.82 47.11599999999999C62.82 64.19699999999999 48.018 79 30.932 79C13.849999999999998 79 0 65.14999999999999 0 48.06599999999999S14.803 16.18099999999999 31.885 16.18099999999999C37.565 16.18099999999999 42.885000000000005 17.718999999999987 47.46 20.39099999999999L66.456 1.3939999999999912C68.315 -0.4650000000000034 71.32900000000001 -0.4650000000000034 73.186 1.3939999999999912L77.899 6.10499999999999C79.758 7.964999999999989 79.084 10.304999999999993 77.225 12.162999999999982M9.519999999999996 48.06599999999998C9.519999999999996 59.89399999999998 19.107999999999997 69.48199999999999 30.931999999999995 69.48199999999999C42.76199999999999 69.48199999999999 53.300999999999995 58.942999999999984 53.300999999999995 47.11499999999998S43.712999999999994 25.698999999999984 31.883999999999993 25.698999999999984C20.058999999999994 25.698999999999984 9.519999999999992 36.237999999999985 9.519999999999992 48.06599999999999');
  });

  it('of hannesjohansson', () => {
    assert.equal(new SVGPathData('M2.25 12.751C2.25 18.265 6.736 22.751 12.25 22.751C14.361 22.751 16.318 22.09 17.933 20.969L25.482 28.518C25.97 29.006 26.61 29.25 27.25 29.25S28.53 29.006 29.018 28.518C29.995 27.542 29.995 25.96 29.018 24.983L21.207 17.172C21.869 15.837 22.251 14.339 22.251 12.751C22.251 7.237 17.765 2.751 12.251 2.751S2.251 7.236 2.25 12.751zM6.251 12.751C6.251 9.442 8.942 6.751 12.251 6.751S18.251 9.442 18.251 12.751S15.56 18.751 12.251 18.751S6.251 16.06 6.251 12.751z').ySymmetry(32).ySymmetry(32).round(10e10).encode(), 'M2.25 12.751C2.25 18.265 6.736 22.751 12.25 22.751C14.361 22.751 16.318 22.09 17.933 20.969L25.482 28.518C25.97 29.006 26.61 29.25 27.25 29.25S28.53 29.006 29.018 28.518C29.995 27.542 29.995 25.96 29.018 24.983L21.207 17.172C21.869 15.837 22.251 14.339 22.251 12.751C22.251 7.237 17.765 2.751 12.251 2.751S2.251 7.236 2.25 12.751zM6.251 12.751C6.251 9.442 8.942 6.751 12.251 6.751S18.251 9.442 18.251 12.751S15.56 18.751 12.251 18.751S6.251 16.06 6.251 12.751z');
  });

  it('of my blog', () => {
    assert.equal(new SVGPathData('m 0,100 0,10 5,0 0,-5 15,0 0,15 -20,0 0,30 25,0 0,-50 z m 5,25 15,0 0,20 -15,0 z').toAbs().encode(), 'M0 100L0 110L5 110L5 105L20 105L20 120L0 120L0 150L25 150L25 100zM5 125L20 125L20 145L5 145z');
  });

  it('of tremby bug report', () => {
    assert.equal(new SVGPathData('M0,250 l20,0 a40,20 0 0,0 40,20 l80,-20 a40,20 0 0,1 40,20 l80,-20 a40,20 0 1,0 40,20 l80,-20 a40,20 0 1,1 40,20 l80,-20 l0,-120 H0 Z').scale(1, -1).encode(), 'M0 -250l20 0a40 20 0 0 1 40 -20l80 20a40 20 0 0 0 40 -20l80 20a40 20 0 1 1 40 -20l80 20a40 20 0 1 0 40 -20l80 20l0 120H0z');
  });

  it('of fh1ch bug report', () => {
    assert.equal(new SVGPathData('M382.658 327.99c16.71-17.204 26.987-40.676 26.987-66.542 0-52.782-42.792-95.575-95.574-95.575-29.894 0-56.583 13.74-74.104 35.24-17.47-7.164-37.11-9.877-57.725-7.596-44.774 4.964-82.87 38.712-94.42 84.393-2.14 8.447-5.14 13.34-14.276 16.473-26.103 8.952-42.988 35.322-41.446 61.6 1.696 28.703 21.253 52.36 48.917 59.185 1.942.48 3.813.668 5.61 1.048.063 0 .114-.216.166-.216h224.753c.154 0 .31.235.463.216 39.072-1.706 70.56-33.144 71.865-71.815.197-5.66-.225-11.13-1.21-16.472m-63.554 62.75c-2.312.503-4.697.847-7.1 1.166-6.095.83-3.763.156-18.232.156H103.716c-3.113 0-6.207.11-9.29-.044-21.283-1.038-36.646-16.796-37.243-37.185-.617-20.696 13.596-37.283 34.52-39.833 5.365-.646 10.873-.082 16.217-.082 6.186-58.885 31.18-90.46 76.418-96.802 19.834-2.785 38.66.794 56.06 10.825 25.434 14.654 38.69 37.81 44.127 66.47 4.748-1.108 8.355-1.973 11.962-2.796 27.85-6.33 54.868 10.033 61.034 36.958 6.516 28.426-9.844 55.01-38.414 61.168zm8.86-121.502c-4.225-1.07-8.613-1.778-13.125-2.097-1.756-.124-3.35-.34-4.788-.668-6.207-1.4-9.794-4.8-13.124-11.49-.185-.37-.37-.73-.555-1.1-5.333-10.44-11.92-19.68-19.537-27.604l-17.82-14.973-.42-.35c13.616-13.822 34.58-24.47 55.473-24.47 41.363 0 75.02 33.657 75.02 75.022 0 16.452-5.334 31.683-14.357 44.056-9.68-17.788-26.348-31.2-46.768-36.327z').toAbs().round(1000).encode(), 'M382.658 327.99C399.368 310.786 409.645 287.314 409.645 261.448C409.645 208.666 366.853 165.873 314.071 165.873C284.177 165.873 257.488 179.613 239.967 201.113C222.497 193.949 202.857 191.236 182.242 193.517C137.468 198.481 99.372 232.229 87.822 277.91C85.682 286.357 82.682 291.25 73.546 294.383C47.443 303.335 30.558 329.705 32.1 355.983C33.796 384.686 53.353 408.343 81.017 415.168C82.959 415.648 84.83 415.836 86.627 416.216C86.69 416.216 86.741 416 86.793 416H311.546C311.7 416 311.856 416.235 312.009 416.216C351.081 414.51 382.569 383.072 383.874 344.401C384.071 338.741 383.649 333.271 382.664 327.929M319.11 390.679C316.798 391.182 314.413 391.526 312.01 391.845C305.915 392.675 308.247 392.001 293.778 392.001H103.716C100.603 392.001 97.509 392.111 94.426 391.957C73.143 390.919 57.78 375.161 57.183 354.772C56.566 334.076 70.779 317.489 91.703 314.939C97.068 314.293 102.576 314.857 107.92 314.857C114.106 255.972 139.1 224.397 184.338 218.055C204.172 215.27 222.998 218.849 240.398 228.88C265.832 243.534 279.088 266.69 284.525 295.35C289.273 294.242 292.88 293.377 296.487 292.554C324.337 286.224 351.355 302.587 357.521 329.512C364.037 357.938 347.677 384.522 319.107 390.68zM327.97 269.177C323.745 268.107 319.357 267.399 314.845 267.08C313.089 266.956 311.495 266.74 310.057 266.412C303.85 265.012 300.263 261.612 296.933 254.922C296.748 254.552 296.563 254.192 296.378 253.822C291.045 243.382 284.458 234.142 276.841 226.218L259.021 211.245L258.601 210.895C272.217 197.073 293.181 186.425 314.074 186.425C355.437 186.425 389.094 220.082 389.094 261.447C389.094 277.899 383.76 293.13 374.737 305.503C365.057 287.715 348.389 274.303 327.969 269.176z');
  });

});
