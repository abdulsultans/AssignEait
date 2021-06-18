const Blogger = require("../models/bloggerSchema");

const createBlogger = async (req, res) => {
  const newBlogger = new Blogger({
    name: req.body.name,
    destination: req.body.destination,
    email: req.body.email,
    dob: req.body.dob,
  });

  await newBlogger.save();
  res.status(202).json(newBlogger);
};

//GET ALL BLOGGERS

const getAllBloggers = async (req, res) => {
  const bloggers = await Blogger.find();
  res.json(bloggers);
};

//GET A BLOGGER
const getSingleBlogger = async (req, res) => {
  const blogger = await Blogger.findById(req.params._id);
  res.json(blogger);
};

// UPDATE A BLOGGER

const updateBlogger = async (req, res) => {
  const foundblogger = await Blogger.findById(req.params._id);

  //destructuring
  // const {name, destination,email,dob}=req.body

  if (foundBlogger) {
    foundBlogger.name = req.name.name;
    foundBlogger.destination = req.name.destination;
    foundBlogger.email = req.name.email;
    foundBlogger.dob = req.name.dob;

    const updatedBlogger = await foundBlogger.save();
    res.json({ updatedBlogger });
  }
};

//DELETE A BLOGGER

const deleteBlogger = async (req, res) => {
  const foundBlogger = await Blogger.findById(req.params._id);
  if (foundBlogger) {
    foundBlogger.remove();
    res.json({ msg: `${foundBlogger.name} removed` });
  } else {
    res.status(404).json({ error: "Blogger not found" });
  }
};

module.exports = {
  createBlogger,
  getAllBloggers,
  getSingleBlogger,
  updateBlogger,
  deleteBlogger,
};
