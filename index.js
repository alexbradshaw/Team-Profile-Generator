const inq = require('inquirer')
const fs = require('fs')

function printHtml(cardsHtml){
    fs.writeFile('dist/team-profile.html',
                        `
<!DOCTYPE html> 
<html lang="en"> 
 
<head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=, initial-scale=1.0"> 
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/styles.css">
</head> 

<body>

    <div class="callout large primary" style="background-color: crimson;">
        <div class="row column text-center">
            <h1 style="margin: 5% 0; font-size: 53px; color: white;">My Team</h1>
          </div>
        </div>


      <div style="display: flex; justify-content: space-evenly; align-items: center; height: 84vh;">
${cardsHtml}
    </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script src='./assets/script.js'> </script>

</body>

</html> 
                  
                  `, err => console.log(err))
}

inq
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your team manager?',
            name: 'man',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s employee ID?',
            name: 'manId',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s email address?',
            name: 'manEmail',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s office number?',
            name: 'manOff',
        },
        {
            type: 'list',
            message: 'Would you like to add an engineer/intern or complete the team build process?',
            name: 'title1',
            choices: ['Engineer', 'Intern', 'Complete']
        }
    ])
    .then(res => {
        var answers = [res]
        let i = 1
        const manHtml = `        
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${answers[0].man}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Team Manager</h6>
          <p class="card-text">Office Number: ${answers[0].manOff}</p>
          <p class="card-text">Id: ${answers[0].manId}</p>
          <a href="mailto:${answers[0].manEmail}" class="card-link">Email</a>
        </div>
      </div>
      `
        var cardsHtml = manHtml
        function addAnother() {
            inq
                .prompt([
                    {
                        type: 'input',
                        message: `What is the name of your team member?`,
                        name: `member${i}Name`,
                    },
                    {
                        type: 'input',
                        message: 'What is the team member\'s employee ID?',
                        name: `member${i}Id`,
                    },
                    {
                        type: 'input',
                        message: 'What is the team member\'s email address?',
                        name: `member${i}Email`,
                    },
                    {
                        type: 'input',
                        message: 'What is the team member\'s office number?',
                        name: `member${i}Off`,
                    },
                    {
                        type: 'input',
                        message: 'What is the team member\'s github username?',
                        name: `member${i}Ghub`,
                    },
                    {
                        type: 'list',
                        message: 'Would you like to add another engineer/intern or complete the team build process?',
                        name: 'title' + (i + 1),
                        choices: ['Engineer', 'Intern', 'Complete']
                    }
                ])
                .then(res => {
                    const current = res
                    answers.push(current)
                    i++
                    console.log(answers)
                    if (eval('res.title' + i) !== 'Complete') {
                        addAnother();
                        return;
                    }
                    if (answers[0].title1 !== 'Complete') {
                        for (let a = 1; a < answers.length; a++) {

                            const currentObject = `        
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${eval(`answers[${a}].member${a}Name`)}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${eval(`answers[${a - 1}].title` + a)}</h6>
            <p class="card-text">Office Number: ${eval(`answers[${a}].member${a}Off`)}</p>
            <p class="card-text">Id: ${eval(`answers[${a}].member${a}Id`)}</p>
            <a href="mailto:${eval(`answers[${a}].member${a}Email`)}" class="card-link">Email</a>
            <a href="https://github.com/${eval(`answers[${a}].member${a}Ghub`)}" class="card-link" target='_blank'>Github</a>
        </div>
    </div>
                      `
                            console.log(currentObject);
                            cardsHtml += '\n' + currentObject
                        }
                    }

                    printHtml(cardsHtml)
                })
        }
        if (eval('res.title' + i) !== 'Complete') {
            addAnother()
        } else {
            printHtml(cardsHtml)
        }
    })

    .catch(err => console.error(err))

