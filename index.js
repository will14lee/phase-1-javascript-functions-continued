//console.log(saturdayFun("bathe my dog"));
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork= function(activity="go to the office"){
  console.log(`This Monday, I will ${activity}.`);
    return `This Monday, I will ${activity}.`;
}
//mondayWork();
function wrapAdjective(flair="*"){
  return function(adj="special"){
      console.log(`You are ${flair}${adj}${flair}!`);
      return `You are ${flair}${adj}${flair}!`;
  }
}
//const encouragingPromptFunction = wrapAdjective("!!!")()
//wrapAdjective("%")("a dedicated programmer")


