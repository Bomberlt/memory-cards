import { compareScores } from "./utils"

describe("utils", () => {
  describe("compareScores", () => {
    test("it should return positive when flip count is smaller for second score", () => {
      const firstScore = { flipCount: 2, timePassed: 1};
      const secondScore = { flipCount: 1, timePassed: 1};
      const result = compareScores(firstScore, secondScore);
      expect(result).toBeGreaterThan(0);
    });
    test("it should return negative when flip count is bigger for second score", () => {
      const firstScore = { flipCount: 2, timePassed: 1};
      const secondScore = { flipCount: 3, timePassed: 1};
      const result = compareScores(firstScore, secondScore);
      expect(result).toBeLessThan(0);
    });
    test("it should return positive when flip count same and time passed smaller for 2nd", () => {
      const firstScore = { flipCount: 2, timePassed: 2};
      const secondScore = { flipCount: 2, timePassed: 1};
      const result = compareScores(firstScore, secondScore);
      expect(result).toBeGreaterThan(0);
    })
  })
})