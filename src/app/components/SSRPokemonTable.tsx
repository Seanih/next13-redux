import PokemonTable from './PokemonTable';
import { store } from '../store';

function SSRPokemonTable() {
	return (
		<div>
			<PokemonTable pokemon={store.getState().search.startupPokemon} />
		</div>
	);
}
export default SSRPokemonTable;
