export default async function getUser(query?: string) {
	if (!query) return;

	const response = await fetch(`https://api.github.com/users/${query}`);

	if (!response.ok) {
		throw new Error("No Result");
	}

	const data = await response.json();

	return data;
}
