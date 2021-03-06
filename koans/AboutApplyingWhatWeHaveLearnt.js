var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];
      var hasNoNuts = products.filter(pizza => pizza.containsNuts !== true);
      // var hasNoMushrooms = function(pizza) {
      //   pizza.ingredients.some(function(ingredient) {
      //     ingredient !== 'mushrooms';
      //   });
      // }
      var hasNoMushrooms = function(option) {
        return _.all(option, (element => element !== "mushrooms"));
      };
      productsICanEat = hasNoNuts.filter(pizza => hasNoMushrooms(pizza.ingredients));
      // productsICanEat = hasNoNuts.filter(function(option) {
      //   return option.ingredients.any(function(ingredient) {
      //     return ingredient === "mushrooms";
      //   });
      // });
      // var hasMushrooms = products.ingredients.filter(ingredient => ingredient.any(one => one === 'mushrooms'));
      // productsICanEat = products.chain()
      //                           .filter(pizza => pizza.containsNuts === false)
      //                           .any(ingredient => ingredient.ingredients !== 'mushrooms')
      //                           // .all(pizza => pizza.ingredients.any(ingredient => !== 'mushrooms'))


      /* solve using filter() & all() / any() */


      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = []
              // _.chain()
              //  .range(1000)
              //  .reduce(function(sum, x) {return sum + x})
              //  .value();    /* try chaining range() and reduce() */
    var numbers = _.range(1000)
    var multiplesOf3 = _.filter(numbers, (element => element % 3 === 0));
    var multiplesOf5 = _.filter(numbers, (element => element %5 === 0));
    numbers = _.union(multiplesOf3, multiplesOf5);
    sum = _.reduce(numbers, function(sum, x) {return sum + x});


    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    // var options = products.reduce((total, ammount) => {
    //   amount.ingredients.forEach(ingredient => {
    //     total.push(ingredient);
    //   });
    // }, {});
    // products.map()
    // _.chain(products)
    //  .map(function(pizza) {var ingredients = pizza.ingredients;
    //                        ingredients.forEach(function(ingredient) {
    //                         if(ingredientCount.ingredient) {
    //                           ingredientCount.ingredient += 1;
    //                         } else {
    //                           ingredientCount.ingredient = 1;
    //                         }
    //                        });return pizza.ingredients;
    //                       })
    products.forEach(function(pizza) {
      pizza.ingredients.forEach(function(ingredient) {
        if(ingredientCount[ingredient]) {
          ingredientCount[ingredient] += 1;
        } else {
          var topings = ingredient
          ingredientCount[topings] = 1;
      }
    });
    });

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
