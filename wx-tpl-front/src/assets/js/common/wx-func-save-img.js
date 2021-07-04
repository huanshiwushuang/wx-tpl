// https://github.com/intbingbing/web-js-add-canvas-watermark
// http://brianium.github.io/watermarkjs/text.html
let drawWatermark = (
	{
		canvas,
		text = 'wuxuwang.com',
		rotate = -45,
		globalAlpha = .5,
		fontSize = 17,
		fontColor = '#f1f1f1',
		font = '17px sans-serif',
		gap = 20,
	}
) => {
	const ctx = canvas.getContext('2d');
	ctx.font = font;
	ctx.globalAlpha = globalAlpha;
	ctx.fillStyle = `${fontSize}px ${fontColor}`;

	let horizontalWidth = ctx.measureText(text).width;
	horizontalWidth = Math.sqrt(horizontalWidth * horizontalWidth / 2) + fontSize;

	const draw = (x, y) => {
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(rotate / 180 * Math.PI);
		ctx.fillText(text, 0, 0);
		ctx.restore();
	}

	const width = canvas.width
	const height = canvas.height
	for (let i = 0; i < width; i += horizontalWidth + gap) {
		for (let j = 0; j < height; j += horizontalWidth + gap) {
			draw(i, j)
		}
	}
};
// 注意，如果水印太长 && 斜着旋转放不下，水印将可能不显示
export default async function (dom, name, watermark = 'watermark') {
	let tmp = import('html2canvas');
	let tmp2 = import('file-saver');
	let tmp3 = import('dayjs');
	let { default: html2canvas } = await tmp;
	let { saveAs } = await tmp2;
	let { default: dayjs } = await tmp3;

	// name 默认值
	name = name ?? dayjs(Date.now()).format('YYYY-MM-DD HH-mm-ss');

	let canvas = await html2canvas(dom);
	let ctx = canvas.getContext('2d');

	let newCanvas = document.createElement('canvas');
	newCanvas.width = canvas.width;
	newCanvas.height = canvas.height;

	let newCtx = newCanvas.getContext('2d');
	newCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);

	drawWatermark({
		canvas: newCanvas,
		text: watermark,
		globalAlpha: .05,
	});

	// IE 不支持 Canvas.toBlob
	if (!newCanvas.toBlob) {
		await import('@/assets/js/lib/canvas-toBlob.js');
	}

	newCanvas.toBlob(function (blob) {
		saveAs(blob, `${name}.png`);
	});
}
