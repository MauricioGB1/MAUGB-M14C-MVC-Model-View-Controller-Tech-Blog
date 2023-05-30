const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Computing Power ",
    "postContent": "Robotic Process Automation, is all about computing and automation software",
    "userId": 1
  },
  {
    "postTitle": "Smarter Devices ",
    "postContent": "Artificial intelligence has played an essential role in making our world smarter and smoother. It is not just simulating humans but going the extra mile to make our life hassle-free and simpler. ",
    "userId": 2
  },
  {
    "postTitle": "Datafication",
    "postContent": "Datafication is simply transforming everything in our life into devices or software powered by data",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;