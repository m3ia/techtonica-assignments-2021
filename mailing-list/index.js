const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const lists = new Map();

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// add some fake data

app.get('/lists', (req, res) => {
  const listsArray = Array.from(lists.keys()); // Why is this like this? Try it out in your console.
  res.send(listsArray);
});

app.route('/lists/:name').get((req,res)=>{
  res.status(200).send(list);
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

const list = {
  "name": "staff",
  "members": ["talea@techtonica.org", "michelle@techtonica.org"]
}

