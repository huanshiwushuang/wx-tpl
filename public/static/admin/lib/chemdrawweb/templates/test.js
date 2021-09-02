const fse = require('fs-extra');
const axios = require('axios');


const json = [
	{
		"name": "Advanced BioDraw",
		"rows": 8,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 44
	},
	{
		"name": "Amino Acid Side Chains",
		"rows": 5,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 30
	},
	{
		"name": "Amino Acids",
		"rows": 5,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 30
	},
	{
		"name": "Anatomy",
		"rows": 6,
		"columns": 9,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 54
	},
	{
		"name": "Animals",
		"rows": 6,
		"columns": 8,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 48
	},
	{
		"name": "Aromatics",
		"rows": 6,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 36
	},
	{
		"name": "Bicyclics",
		"rows": 5,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 25
	},
	{
		"name": "Bio Instruments",
		"rows": 6,
		"columns": 8,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 48
	},
	{
		"name": "BioArt",
		"rows": 4,
		"columns": 8,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 26
	},
	{
		"name": "Bugs",
		"rows": 3,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 18
	},
	{
		"name": "Clipware, part 1",
		"rows": 8,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 45
	},
	{
		"name": "Clipware, part 2",
		"rows": 6,
		"columns": 8,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 48
	},
	{
		"name": "Conformers",
		"rows": 5,
		"columns": 7,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 35
	},
	{
		"name": "Cp Rings",
		"rows": 4,
		"columns": 7,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 28
	},
	{
		"name": "Cycloalkanes",
		"rows": 4,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 24
	},
	{
		"name": "DNA Templates",
		"rows": 5,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 25
	},
	{
		"name": "Functional Groups",
		"rows": 6,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 30
	},
	{
		"name": "Hexoses",
		"rows": 6,
		"columns": 9,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 54
	},
	{
		"name": "Metallocenes",
		"rows": 2,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 10
	},
	{
		"name": "Microorganisms",
		"rows": 1,
		"columns": 9,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 9
	},
	{
		"name": "Nanotubes",
		"rows": 3,
		"columns": 6,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 16
	},
	{
		"name": "Organelles",
		"rows": 2,
		"columns": 7,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 14
	},
	{
		"name": "Ph Rings",
		"rows": 4,
		"columns": 7,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 28
	},
	{
		"name": "Polyhedra",
		"rows": 5,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 25
	},
	{
		"name": "Polypeptides",
		"rows": 3,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 15
	},
	{
		"name": "RNA Templates",
		"rows": 5,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 25
	},
	{
		"name": "Shapes",
		"rows": 5,
		"columns": 7,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 35
	},
	{
		"name": "Stereocenters",
		"rows": 5,
		"columns": 4,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 20
	},
	{
		"name": "Supramolecules",
		"rows": 6,
		"columns": 5,
		"imgWidth": 60,
		"imgHeight": 60,
		"count": 30
	}
];
const baseUrl = 'https://chemdrawdirect.perkinelmer.cloud/js/chemdrawweb';



json.reverse().forEach(async (item) => {
	const folderName = item.name;

	for (let i = 1; i <= 10; i++) {
		for (let j = 1; j <= 10; j++) {
			let url = `${baseUrl}/templates/${folderName}/${i}_${j}.png`;

			try {
				let res = await axios.get(url, {
					responseType: 'arraybuffer',
				})

				// console.error(e.statusCode);

				fse.outputFile(`${folderName}/${i}_${j}.png`, res.data);
			} catch (e) {
				console.log(`${e.response.status}---${url}`);
			}

		}
	}
})