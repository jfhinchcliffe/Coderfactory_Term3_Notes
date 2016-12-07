var fetch = require('node-fetch');

function loadRecipes(query) {
  var url = 'http://www.recipepuppy.com/api/?q=' + query;
  var promise = fetch(url);
  return promise.then(function(response) {
    var jsonPromise = response.json();
    return jsonPromise;
  })
  .then(function(json){
    var recipes = json.results;
    return Promise.resolve(recipes);
  })
  .catch(function(error) {
    console.error(error);
  })
}

loadRecipes('potato')
.then(function(recipes) {
  recipes.forEach(function(recipe) {
    console.log(recipe.title);
  });
});
loadRecipes('chicken')
.then(function(recipes) {
  recipes.forEach(function(recipe) {
    console.log(recipe.title);
  });
});
console.log("Happy homepage!");