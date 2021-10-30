export default {
    green(str, style) {
        console.info(`%c ${str}`, `
            color: white;
            background: green;
            font-weight: bold;
            border-radius: 99px;
            padding: 4px 10px 4px 6px;
            ${style}
        `);
    },
    red(str, style) {
        console.info(`%c ${str}`, `
            color: white;
            background: red;
            font-weight: bold;
            border-radius: 99px;
            padding: 4px 10px 4px 6px;
            ${style}
        `);
    },
}