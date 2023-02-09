import {Allergen} from "../generated/graphql";

export default function UseAllergens() {
    const allergens = [
        {id: Allergen.Gluten, name: 'Gluten'},
        {id: Allergen.Shellfish, name: 'Crustacés'},
        {id: Allergen.Eggs, name: 'Oeufs'},
        {id: Allergen.Fish, name: 'Poissons'},
        {id: Allergen.Peanuts, name: 'Arachides'},
        {id: Allergen.Soy, name: 'Soja'},
        {id: Allergen.Milk, name: 'Lait'},
        {id: Allergen.Nuts, name: 'Fruits à coques'},
        {id: Allergen.Celery, name: 'Céleri'},
        {id: Allergen.Mustard, name: 'Moutarde'},
        {id: Allergen.Sesame, name: 'Graines de sésame'},
        {id: Allergen.Sulfur, name: 'Anhydride sulfureux'},
        {id: Allergen.Lupin, name: 'Lupin'},
        {id: Allergen.Molluscs, name: 'Mollusques'},
    ]

    const translate = (value: string) => allergens.find(t => value === t.id)?.name;
    return {allergens, translate}
}
