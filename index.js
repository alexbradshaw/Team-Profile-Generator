const inq = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

function printHtml(cardsHtml) {
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
                  
                  `, err => console.log('HTML has been generated!'))
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
        const answers = [res]
        const man = new Manager(res.man, parseInt(res.manId), res.manEmail, parseInt(res.manOff))
        let i = 1
        const manHtml = `        
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${man.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${man.getRole()}</h6>
          <p class="card-text">Office Number: ${man.getOffice()}</p>
          <p class="card-text">Id: ${man.getId()}</p>
          <a href="mailto:${man.getEmail()}" class="card-link">Email</a>
        </div>
      </div>
      `
        let currentTitle
        if (eval('res.title' + i) === 'Intern') {
            currentTitle = 'school'
        } else if (eval('res.title' + i) === 'Engineer') {
            currentTitle = 'github'
        } else {
            currentTitle = 'error'
        }
        var cardsHtml = manHtml
        function addAnother(res) {
            inq
                .prompt([
                    {
                        type: 'input',
                        message: `What is the name of your ${eval('res.title' + i)}?`,
                        name: `member${i}Name`,
                    },
                    {
                        type: 'input',
                        message: `What is the ${eval('res.title' + i)}'s employee ID?`,
                        name: `member${i}Id`,
                    },
                    {
                        type: 'input',
                        message: `What is the ${eval('res.title' + i)}'s email address?`,
                        name: `member${i}Email`,
                    },
                    {
                        type: 'input',
                        message: `What is the ${eval('res.title' + i)}'s ${currentTitle}?`,
                        name: `member${i}Other`,
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
                    if (eval('res.title' + i) === 'Intern') {
                        currentTitle = 'school'
                    } else if (eval('res.title' + i) === 'Engineer') {
                        currentTitle = 'github'
                    } else {
                        currentTitle = 'error'
                    }
                    if (eval('res.title' + i) !== 'Complete') {
                        addAnother(res);
                        return;
                    }
                    if (answers[0].title1 !== 'Complete') {
                        for (let a = 1; a < answers.length; a++) {
                            var currentObject
                            if (eval(`answers[${a - 1}].title` + a) === 'Engineer') {
                                const eng = new Engineer(eval(`answers[${a}].member${a}Name`), parseInt(eval(`answers[${a}].member${a}Id`)), eval(`answers[${a}].member${a}Email`), eval(`answers[${a}].member${a}Other`))

                                currentObject = `        
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${eng.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${eng.getRole()}</h6>
            <p class="card-text">Id: ${eng.getId()}</p>
            <a href="mailto:${eng.getEmail()}" class="card-link">Email</a>
            <a href="https://github.com/${eng.getGithub()}" class="card-link" target='_blank'>Github</a>
        </div>
    </div>
                      `
                            } else if (eval(`answers[${a - 1}].title` + a) === 'Intern') {
                                const inte = new Intern(eval(`answers[${a}].member${a}Name`), parseInt(eval(`answers[${a}].member${a}Id`)), eval(`answers[${a}].member${a}Email`), eval(`answers[${a}].member${a}Other`))

                                currentObject = `        
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${inte.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${inte.getRole()}</h6>
            <p class="card-text">Id: ${inte.getId()}</p>
            <p class="card-text">School: ${inte.getSchool()}</p>
            <a href="mailto:${inte.getEmail()}" class="card-link">Email</a>
        </div>
    </div>
                      `
                            } else {
                                currentObject = `        
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${eval(`answers[${a}].member${a}Name`)}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${eval(`answers[${a - 1}].title` + a)}</h6>
                                        <p class="card-text">Id: ${eval(`answers[${a}].member${a}Id`)}</p>
                                        <a href="mailto:${eval(`answers[${a}].member${a}Email`)}" class="card-link">Email</a>
                                        <a href="https://github.com/${eval(`answers[${a}].member${a}Other`)}" class="card-link" target='_blank'>Github</a>
                                    </div>
                                </div>
                                                  `
                            }
                            cardsHtml += '\n' + currentObject
                        }
                    }

                    printHtml(cardsHtml)
                })
        }
        if (eval('res.title' + i) !== 'Complete') {
            addAnother(res)
        } else {
            printHtml(cardsHtml)
        }
    })

    .catch(err => console.error(err))