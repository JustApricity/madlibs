var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index')
});
/* GET home page. */
router.post('/story', function(req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  })
});

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}


function generateStory1(formData){
  return `Today is a ${formData.noun1}. I was walking home from school and I saw that ${formData.adjective1} cat who ${formData.verb1} over to me.`
}
function generateStory2(formData){
  return `It is almost halloween, I can't wait to put on my ${formData.noun1} with ${formData.adjective1} and ${formData.verb1} all over the place!`
}
function generateStory3(formData){
  return `We are making a sandwich that is ${formData.noun1}. The sandwich will be ${formData.adjective1} and we want to ${formData.verb1} it.`
}
module.exports = router;