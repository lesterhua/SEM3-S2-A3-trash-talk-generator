//random various index and value
function generateLetter(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateTrashTalk(option) {
  //define all things user need
  const target = ["工程師", "設計師", "創業家"];
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };
  const phrase = ["很簡單", "很容易", "很快", "很正常", "不難"];

  //define dummy data of req.body
  // const option = { job: "entrepreneur" };

  //create a collection to store things user picked up
  let newTask = "";
  let jobName = "";
  if (option.job === "engineer") {
    newTask = generateLetter(task.engineer);
    console.log(newTask);
    jobName = target[0];
  } else if (option.job === "designer") {
    newTask = generateLetter(task.designer);
    jobName = target[1];
  } else if (option.job === "entrepreneur") {
    newTask = generateLetter(task.entrepreneur);
    jobName = target[2];
  } else {
    return "未勾選任何一項，請重新再確認一次!";
  }

  let newPhrase = generateLetter(phrase);
  console.log(newPhrase);

  // return value
  let trashTalk = `身為一個${jobName}，${newTask}，${newPhrase}吧!`;
  console.log(trashTalk);
  return trashTalk;
}

// export function
module.exports = generateTrashTalk;
