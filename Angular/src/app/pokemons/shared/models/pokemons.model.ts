export class Pokemons {

    constructor(
        public id: number,
        public name: string,
        public level: number,
        public hp: number,  // HealthPoints
        public abilities:  string[] 
    ) { }
}
