import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            "message": "Enter the URL of your choice: ",
            "name": "URL"
        }
    ])
    .then((answers) => {
        // console.log(answers);
        const url = answers.URL;

        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('new_qr.png'));

        fs.writeFile('link.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


