import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://goo.gl/f8XW12'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://goo.gl/f8XW12')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
