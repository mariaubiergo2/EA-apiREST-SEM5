import { Router } from "express";
import { readdirSync } from "fs"; // In charge of reading the files in a directory

// The route to the actual directory
const PATH_ROUTER = `${__dirname}`;

const router = Router();

// Get the file names in routes dir without the extension (eg. user.ts > user)
const cleanFileName = (filename:string) => {
    const file = filename.split('.').shift();
    return file;
}

// Creation of the names of the routes
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }    
});

export {router};
