import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-content.component.html',
  styleUrls: ['./recipe-content.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  btnText = "Submit";
  ingredientText = "Add ingredient here..";
  directionText = "Add direction here..";

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(){
    this.recipe.ingredients.push(this.ingredientText);
    this.ingredientText = "";
  }

  addNewDirection(){
    this.recipe.directions.push(this.directionText);
    this.directionText = "";
  }

}
