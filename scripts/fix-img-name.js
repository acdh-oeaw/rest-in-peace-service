import { readdirSync, readFileSync, writeFileSync } from "fs";
// import { readdir } from "fs/promises"
const tombstones = readdirSync("src/content/tombstones");
console.log(tombstones);
// 1. list all json files in content/tombstones folder
tombstones.forEach((fileName) => {
  const filePath = `src/content/tombstones/${fileName}`;
  const content = readFileSync(filePath, { encoding: "utf-8" });
  const tombstone = JSON.parse(content);
  //tombstone.img = "/images/" + tombstone.img;
  console.log(tombstone.img);
  const updatedTombstone = JSON.stringify(tombstone, null, 2);
  writeFileSync(filePath, updatedTombstone);
});
// 2. iterate over these json files, and for every file, open it, read it, and parse the json to a javascript object
// 3.                                                    change the "img" property

// 4.                                                    json-stringify the js obj, and write out the file
