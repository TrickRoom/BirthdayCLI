const bdatabase = 'data.json';
const fs = require('fs');
const program = require('commander');
program
    .version('0.1.0')
    .option('-n, --name [type]', 'Add name', 'Unknown')
    .option('-d --date', 'Add date [dd/mm/yyyy]')
    .option('-u, --upcoming', 'Display only upcoming birthdays')
    .option('-r, --remove', 'Remove birthday')
    .option('-h, --help', 'Display help')
    .option('-v, --version', 'Display version')
    .parse(process.argv);

syncDatabase();
if (program.name && program.date){
    //add bday
    var temp = Person(program.name,program.date);

}
else if (program.upcoming){
   //return upcomming bdays
}
else if (program.help){
    //return help
}
else if(program.version){
return version
}

//main stuff
//list all the shit
console.log(program.name);

//helper functions
function syncDatabase() {
    if(!fs.existsSync(bdatabase)) {
        fs.closeSync(fs.openSync(bdatabase, 'w'));
    }
    else{

    }
}

function Person(name, date){
    this.mName=name;
    this.mDate=date;
}
//function to sync/create database
//"" to only get upcomming
//"" to add
//"" to remove