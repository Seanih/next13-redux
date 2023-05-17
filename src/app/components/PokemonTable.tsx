import { Pokemon } from '../types';

function PokemonTable({ pokemon }: { pokemon: Pokemon[] }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{pokemon.map(pkmon => (
					<tr key={pkmon.name}>
						<td>{pkmon.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
export default PokemonTable;
