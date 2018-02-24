import test from "ava";
import { calculateTicks } from "../../src/plugins/Coord";

test("calculateTicks", (t) => {
  // 断言
  t.is(calculateTicks(0, 10, 100).ceilMax, 10);
});
