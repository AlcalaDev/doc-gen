import { UseCase } from '../../../shared';
import { type Pokemon } from '../../domain';
import type { PokemonRepository } from '../ports';

/**
 * Represents a use case to retrieves information about pokemon.
 */
export class GetPokemonList<TPokemon extends Pokemon> implements UseCase {
  /**
   * Creates an instance of pokemonRepository.
   * @param pokemonRepository - The pokemon repository.
   */
  constructor(protected readonly pokemonRepository: PokemonRepository<TPokemon>) {}

  /**
   * Executes the use case to retrieves a list of pokemon.
   * @returns A promise that resolves to the result of retrieving pokemon list.
   */
  execute(): Promise<TPokemon> {
    return this.pokemonRepository.getList();
  }
}
