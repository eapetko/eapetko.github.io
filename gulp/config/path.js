// Получить имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //Путь к папке с результатом
const srcFolder = `./src`; // Путь к папке с исходниками

// Общий объект, хранит всю информацию о пути файла
export const path = {
	build: {
		files: `${buildFolder}/files/`
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`
	}, // пути к файлам и папкам за которыми нужно следить
	clean: buildFolder, // равна папке с результатом
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder, // название текущей папки проекта
	ftp: ``
} 