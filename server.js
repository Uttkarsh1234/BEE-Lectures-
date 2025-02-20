const exress = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(__dirname + '/signup.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});