// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var counter = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      counter += 1;
    }
  });

  return counter;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userTweets = [];

  _.each(tweets, function(tweet, key, tweets) {
    if (tweet['user'] === user) {
      userTweets.push(tweet);
    }
  });

  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {

  var targetFruits = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });

  return targetFruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {

  var targetFruits = _.filter(fruits, function(fruit) {
    return fruit.indexOf(letter) === 0;
  });

  return targetFruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {

  var cookies = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });

  return cookies;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {

  var userTweets = _.filter(tweets, function(tweet) {
    return tweet['user'] === user;
  });

  return userTweets;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {

  var loudFruits = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

  return loudFruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {

  var taggedDesserts = _.map(desserts, function(dessert) {
    //console.log(dessert['ingredients'].indexOf('flour'));
    if (dessert['ingredients'].indexOf('flour') === -1) {
      dessert['glutenFree'] = true;
      return dessert;
    }
  });

  var flourlessDesserts = _.filter(taggedDesserts, function(dessert) {
    return dessert !== undefined;
  });

  return flourlessDesserts;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {

  var messages = _.map(tweets, function(tweet) {
    return tweet.message;
  });

  return messages;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var discounts = _.map(groceries, function(item) {

    var priceNumber = Number(item.price.substr(1, item.price.length - 1));

    var details = {
      'id': item.id,
      'product': item.product,
      'price': item.price,
      'salePrice': '$' + (priceNumber - (priceNumber * coupon)).toFixed(2)
    };

    return details;
  });

  return discounts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {

  var total = _.reduce(products, function(runningTotal, product) {
    var priceNumber = Number(product.price.substr(1, product.price.length - 1));
    return runningTotal + priceNumber;
  }, 0);

  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {

  var dessertTally = _.reduce(desserts, function(dessertCollection, item) {
    if (dessertCollection[item.type] === undefined) {
      dessertCollection[item.type] = 1;
    } else {
      dessertCollection[item.type] += 1;
    }

    return dessertCollection;

  }, {});

  return dessertTally;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

  var messageTally = _.reduce(tweets, function(tweetCollection, tweet) {
    if (tweetCollection[tweet.user] === undefined) {
      tweetCollection[tweet.user] = 1;
    } else {
      tweetCollection[tweet.user] += 1;
    }

    return tweetCollection;

  }, {});

  return messageTally;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {

  var ninetiesFilms = _.reduce(movies, function(movieList, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
      movieList.push(movie.title);
    }

    return movieList;

  }, []);

  return ninetiesFilms;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {

  var isUnderTime = _.reduce(movies, function(passesTimeCheck, movie) {
    if (movie.runtime < timeLimit) {
      passesTimeCheck = true;
      return passesTimeCheck;
    } else {
      return passesTimeCheck;
    }
  }, false);

  return isUnderTime;
};
