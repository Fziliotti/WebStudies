const fs = require('fs')

async function myReadfile() {
    try {
        const file = await fs.readFileSync('texto.txt', 'utf8');

        console.log("------myReadFile1-------")
        console.log(file.toString())

    } catch (err) {
        console.error(err)
    }
};
myReadfile();



async function myReadfile2() {
    try {
        await fs.readFile('texto.txt', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log("------myReadFile2-------")
                console.log(data.toString())
            }
        })

    } catch (err) {
        console.error(err)
    }
};
myReadfile2();