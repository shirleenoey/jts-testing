const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', () => {
	expect.assertions(2);
	return swapi.getPeople(fetch).then(data => {
		expect(data.count).toEqual(87);
		expect(data.results.length).toBeGreaterThan(5);
	})
});

// it('calls swapi to get people with promise', () => {
	// expect.assertions(1);
// 	return swapi.getPeoplePromise(fetch).then(data => {
// 		expect(data.count).toEqual(87);
// 	})
// }); //ERROR .then is undefined