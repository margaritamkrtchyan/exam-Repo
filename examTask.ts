import * as fs from 'fs';
import * as path from 'path';

function printPath(dirPath: string, tab: string = ''): void {
    try {
        if (!fs.existsSync(dirPath)) {
            console.log(`Directory does not exist!`);
            return;
        }

        const items = fs.readdirSync(dirPath);
      
        items.forEach(item => {
            const fullPath = path.join(dirPath, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                console.log(`${tab} ${item}`);
                
                printPath(fullPath, tab + '  ');
            } else if (stats.isFile()) {
                console.log(`${tab} ${item}`);
            }
        });
    } catch (err) {
        console.log(`Error reading directory ${dirPath}:`, err.message);
    }
}

printPath('C:\\Users\\Admin\\Desktop\\abcd'); 








