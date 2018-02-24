import test from "ava";

test("root pass", (t) => {
  t.pass();
});
test("root equal", (t) => {
  t.deepEqual([1, 2, 3], [1, 2, 3]);
});
