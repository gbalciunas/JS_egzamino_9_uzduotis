/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(title, director, budget){
        this.title = title       
        this.director = director
        this.budget = budget
    }

    wasExpensive(){
       /* var x = ` ${this.budget} `
        console.log(`Filmo "${this.title}", kurio riežisierius yra ${this.director}, biudžetas yra ${this.budget} mln USD`)
        x > 100 ?
        console.log((true), `Šio filmo biudžetas yra didesnis nei 100 mln USD`) : 
        console.log(false)
        console.log("===============================")*/

        var x =  `${this.budget}` 
        console.log(`Filmo "${this.title}", kurio riežisierius yra ${this.director}, biudžetas: ${this.budget} mln USD`)
        if (x > 100) {
        console.log(true)
        console.log("Šio filmo biudžetas yra didesnis nei 100 mln USD") 
        } else {
        console.log(false)
        console.log("Šio filmo biudžetas neviršyjo 100 mln USD")
        }
        console.log("===============================")

        
    }

}

var movie1 = new Movie("John Carter", "Andrew Stanton", 263,7)
var movie2 = new Movie("Green Book", "Peter Farrelly", 23)

movie1.wasExpensive()
movie2.wasExpensive()