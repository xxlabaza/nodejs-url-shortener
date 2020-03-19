
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

const express = require("express");
const router = express.Router();

const repository = require("./ShortUrlModel");


router.get("/", async (_, response) => {
  const items = await repository.find();
  response.render("index", { items: items });
});

router.post("/create", async (request, response) => {
  const fullUrl = request.body.fullUrl;
  await repository.create({ full: fullUrl });
  response.redirect("/");
});

router.get("/:shortUrl", async (request, response) => {
  const shortUrl = request.params.shortUrl;
  const item = await repository.findOne({ short: shortUrl });
  if (item === null) {
    return response.sendStatus(404);
  }

  item.clicks += 1;
  item.save();

  response.redirect(item.full);
});


module.exports = router;
