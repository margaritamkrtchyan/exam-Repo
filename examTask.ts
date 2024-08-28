import * as fs from 'fs';
import * as path from 'path';

function printPath(dirPath: string, tab: string = ''): void {
    try {
        
        const normalizedPath = path.normalize(dirPath);
        const absolutePath = path.isAbsolute(normalizedPath) ? normalizedPath : path.resolve(normalizedPath);

        if (!fs.existsSync(absolutePath)) {
            console.log(`Wrong directory: ${absolutePath}`);
            return;
        }

        const items = fs.readdirSync(absolutePath);

        items.forEach(item => {
            const fullPath = path.join(absolutePath, item);
    
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                console.log(`${tab}📁 ${item}`);
                printPath(fullPath, tab + '  ');
            } else if (stats.isFile()) {
                console.log(`${tab}📄 ${item}`);
            }
        });
    } catch (err) {
        console.log(`Wrong directory: ${dirPath}:`, err.message);
    }
}


printPath('C:/Users/Admin/Desktop/Новая папка (9)');  
// printPath('C:\\Users\\Admin\\Desktop\\Новая папка (9)');  

