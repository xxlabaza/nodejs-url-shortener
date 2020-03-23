
/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const db = require("../../../main/js/database");
const ShortUrl = require("../../../main/js/shorter/model");

beforeAll(() => {
  return db.connect("mongodb://127.0.0.1/url_shortener-db");
});

afterAll(() => {
  return db.disconnect();
});

beforeEach(() => {
  return ShortUrl.deleteMany({});
});

describe("database properly clear before each test", () => {

  test("check and insert", async () => {
    let count = await ShortUrl.countDocuments();
    expect(count).toBe(0);

    await new ShortUrl({
      full: "http://popa.com"
    }).save();

    count = await ShortUrl.countDocuments();
    expect(count).toBe(1);
  });

  test("check it's empty", async () => {
    const count = await ShortUrl.countDocuments();
    expect(count).toBe(0);
  });
});
