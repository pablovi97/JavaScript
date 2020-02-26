import { Pokemons } from './pokemons.mock';

describe('Pokemons', () => {
  it('should create an instance', () => {
    expect(new Pokemons()).toBeTruthy();
  });
});
