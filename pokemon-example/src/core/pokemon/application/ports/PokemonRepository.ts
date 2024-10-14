import { Pokemon } from "../../domain";

/**
 * Represents a repository for managing pokemon information
 */
export interface PokemonRepository<TPokemon extends Pokemon> {
  /**
   * Retrieves information as pokemon.
   * @returns promise - A promise that resolves to the result of retrieving pokemon list.
   */
  getList(): Promise<TPokemon>;
   /**
   * Retrieves a pokemon queried by name
   * @returns promise - A promise that resolves to the result of retrieving a pokemon information.
   */
   getByName(name:string): Promise<TPokemon>;
}


