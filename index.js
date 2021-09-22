let score=0;
let userStatus='';

var readlineSync=require('readline-sync');
var chalk=require('chalk');
const question=[
    {
        question:'1. Who was the Viceroy of India during Swadeshi Movement?',
        option1:'(a) Lord Irwin',
        option2:'(b) Lord Curzon',
        option3:'(c) Lord Lansdowne',
        option4:'(d) Lord Willingdon',
        answer:'b'
    },
    {
        question:'2. Who set up Swadesh Bandhab Samiti to propagate the Swadeshi Movement?',
        option1:'(a) Ashwini Kumar Dutt',
        option2:'(b) Surendranath Banerjee',
        option3:'(c) Rabindra Nath Tagore',
        option4:'(d) G K Gokhale',
        answer:'a'
    },
    {
        question:'3. Which is used in pencils?',
        option1:'(a) Silicon',
        option2:'(b) Charcoal',
        option3:'(c) Phosphorous',
        option4:'(d) Graphite',
        answer:'d'
    },
    {
        question:'4. Which animal is known as the \'Ship of the Desert\'?',
        option1:'(a) Desert',
        option2:'(b) Yak',
        option3:'(c) Camel',
        option4:'(d) Deer',
        answer:'c'
    },
    {
        question:'5. What type of bird lays the largest eggs?',
        option1:'(a) Eagle ',
        option2:'(b) Hummingbirds',
        option3:'(c) Herons',
        option4:'(d) Ostrich',
        answer:'d'
    }
]
let userScoreRecord=[];

function scoreRecord(currScore,userName){
    userScoreRecord.push({name:userName,score:currScore});
    //console.log(userScoreRecord[0]);
}

while(userStatus.toLowerCase() != 'e')
{
    score=0;
    const userName=readlineSync.question("Enter your name: ");
    console.log(chalk.magenta.bold("Hello "+userName+"!"));
    console.log(chalk.magenta("Welcome to our quiz contest"));

    for(let i=0;i<question.length;i++)
    {
        play(question[i]);   
    }
    scoreRecord(score,userName);
    console.log("Your score is: "+score);
    userStatus=readlineSync.question("If you exit into the quiz contest enter 'e' otherwise repeat enter any key.\n");
}
function play(questionAnswer){

    let userAnswer=readlineSync.question(
        chalk.green(questionAnswer.question)+"\n"+
        chalk.blue(questionAnswer.option1)+"\n"+
        chalk.blue(questionAnswer.option2)+"\n"+
        chalk.blue(questionAnswer.option3)+"\n"+
        chalk.blue(questionAnswer.option4)+"\n"
    );
    if(questionAnswer.answer.toUpperCase() === userAnswer.toUpperCase())
    {
        score=score+1;
        console.log(chalk.yellow("You're entered: "+userAnswer));
        console.log(chalk.bgGreen.bold("right answer"));
        console.log("---------------");
    }
    else{
        console.log(chalk.yellow("You're entered: "+userAnswer));
        console.log(chalk.bgRed.bold("wrong answer!"));
        console.log("---------------");
    }
}
//console.log(userScoreRecord);
console.log("Your final score is: "+score);