module.exports = function load_lesson(fs, files) {
  return files.map((file) => ({
    name: file.name,
    path: fs.readFileSync("src/documents/lessons/" + file.path, "utf8"),
  }));
};
