const fs = require('fs').promises;

async function readFile(){
    const result = {
        error:null,
        content:null
    }

    try{
        const file = await fs.readFile('./not_exist.txt');
        const content = file.toString('utf8');

        result.content = content;

        return result;
    } catch (error) {
        result.error = error.message;

        return result;
    }
}

async function main(){
    const result = await readFile();

    if (result.error) {
        console.log(result.error);
    } else{
        console.log(result.content);
    }
}

main();