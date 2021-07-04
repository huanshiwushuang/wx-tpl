export default function () {
	let mql = window.matchMedia('(max-width: 750px)');
	let res = {
		h5: mql.matches
	};

	mql.addEventListener('change', (mql) => {
		res.h5 = mql.matches;
	})
	return res;
}
