"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
ava_1.default("root pass", (t) => {
    t.pass();
});
ava_1.default("root equal", (t) => {
    t.deepEqual([1, 2, 3], [1, 2, 3]);
});
