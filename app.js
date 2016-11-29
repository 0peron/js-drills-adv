function recipeFactory(name, ingredients, steps) {
    return {
        name: name,
        ingredients: ingredients,
        steps: steps,
        stepsHtml: function () {
            return '<ol>' + this.steps.map(
                function (steps) {
                    return '<li>' + steps + '</li>';
                }).join('') + '</ol>';
        },
        ingredientsHtml: function () {
            return '<ul>' + this.ingredients.map(
                function (ingredients) {
                    return '<li>' + ingredients + '</li>';
                }).join('') + '</ul>';
        }
    }
}

// tests

function testRecipeFactory() {
    var grilledCheese = recipeFactory(
        'grilled cheese', ['2 slices bread', 'butter', '1 slice cheese'], ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
    );
    if (grilledCheese) {
        console.log(grilledCheese); // `$` is a shortcut to the jQuery library, which
        // you'll learn about in the next unit.
        // Here, we're using jQuery to update elements in the HTML
        $('.js-recipe-name').text(grilledCheese.name);
        $('.js-ingredients').html(grilledCheese.ingredientsHtml());
        $('.js-steps').html(grilledCheese.stepsHtml());
    }
}

testRecipeFactory()
