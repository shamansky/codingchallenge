const groupArrayElements = require("./challenge.js");

test("groupArrayElements([1, 2, 3, 4, 5], 3) returns what the challenge asked for", () => {
  expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
});

test("function returns the correct number of arrays", () => {
  expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6]
  ]);
});

test("function returns the correct number of arrays", () => {
  expect(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ]);
});

test("function returns 3 arrays even if the array length is less than the divider(adding extra empty array(s))", () => {
  expect(groupArrayElements([1, 2], 3)).toEqual([[1], [2], []]);
});

test("divider less than 1 returns empty array", () => {
  expect(groupArrayElements([1, 2, 3], 0)).toEqual([]);
});
