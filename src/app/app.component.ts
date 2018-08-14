import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe (
      'Buttered Biscuit',
      ['2 1/4 cups (280 grams) all-purpose flour', '2 teaspoons to 1 1/2 tablespoons (10 to 20 grams) sugar', '1 tablespoon (15 grams) baking powder', '3/4 teaspoon (5 grams) table salt', '3/4 teaspoon baking soda', '9 tablespoons (125 grams) chilled unsalted butter, cut into small chunks', '3/4 cup (175 ml) buttermilk.'],
      ['Heat oven to 400 degrees F', 'whisk flour, sugar, baking powder, salt, and baking soda in large wide bowl', 'Work butter into dry ingredients, add buttermilk, and stir.' 'Transfer dough to floured counter and dispense out 1/2 to 3/4 inch thick balls of dough and place on baking sheet 2 inches apart.' 'Bake until biscuits about 12 - 15 minutes or golden brown.']
    ),
    new Recipe (
      'Sea Urchin Guacamole Tacos',
      ['164 sea urchin tongues', '3	canned chipotle chilies (minced)', '1 1/2	teaspoons	sugar', '1	tablespoon',	'fresh lime juice', 'flaky salt (as needed)', '2	Hass avocados', '1/2	medium white onion, minced', '1	serrano chile, minced', '3	tablespoons	fresh lime juice', '60	cilantro leaves (from about 15 sprigs), roughly chopped', '12	tortillas'],
      ['In a small bowl, combine the 36 sea urchin tongues with the chipotles, sugar, 1 tablespoon lime juice, and Maldon salt.', 'Use a fork to gently crush the ingredients together. Transfer to a container and refrigerate until ready to use.', 'Cut open the avocados, remove their pits, and scoop the flesh into a bowl. Add the ½ minced white onion, serrano chile, 3 tablespoons lime juice, chopped cilantro, Maldon salt, and 72 sea urchin tongues.', 'Use a fork or an avocado masher to gently mash the guacamole and set aside. Make one batch of tortillas and hold them warm.', 'Lay out the warm tortillas on serving plates. Place a few tablespoons of the sea urchin guacamole on each tortilla and evenly distribute the 48 urchin tongues among the tacos.', 'Season with salt and top with the sea urchin salsa, minced onion, and chopped cilantro.', 'Squeeze a couple of the lime wedges over the tacos and serve the rest on the side.']
    ),
    new Recipe (
      'Grilled Cheese Sandwich',
      ['Two slices of sandwich bread', 'two slices of cheddar cheese', '1/4 inch butter'],
      ['Take the butter and melt on a pan', 'toast the bread on the pan and place cheese in the middle', 'grill till toasty golden and cheese has melted perfectly in the middle of the sandwich... now enjoy'],
    )
  ]
}
