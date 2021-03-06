const { findMany, findOne, create } = require('../models/post');

module.exports.getCollection = async (req, res) => {
  const posts = await findMany();
  res.send(posts);
};

module.exports.findOne = async (req, res) => {
  res.send(await findOne(req.params.id));
};

module.exports.handlePost = async (req, res) => {
  const { title, content } = req.body;
  const main_picture_url = req.file ? req.file.path : null
  const createdpost = await create({ title, content, main_picture_url });
  res.status(201).send(createdpost)
}
