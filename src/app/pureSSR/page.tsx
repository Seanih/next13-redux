import SSRPokemonTable from '../components/SSRPokemonTable';

import { store } from '../store';
import { setStartupPokemon } from '../store/searchSlice';

export default async function Home() {
	const req = await fetch('http://localhost:3000/api/search');
	const data = await req.json();

	store.dispatch(setStartupPokemon(data));

	return (
		<main className='text-center'>
			<h1 className='text-xl font-bold text-sky-600'>pureSSR page</h1>
			<SSRPokemonTable />
		</main>
	);
}
