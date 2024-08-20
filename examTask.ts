import * as fs from "fs";
import * as patch from "path";

function printPath (pathDir:"string") : void {

   try {
    const files = fs.readFileSync(pathDir);
    console.log(files)

    for (const file of files) {

        const itemPath = path.join(dirpath, item);
        const stats= fs.statSync(itemPath)
    }

    if(stats.isdirectory()) {e
        console.log(`"    " ${stats}` )
        printPath(itemPath)
    }else{
       if(stats.isFile() )
        console.log(`"    " ${itemPath}`)
      
    }
} catch(err) {
    console.log (err.message)
}
}


 printPath()