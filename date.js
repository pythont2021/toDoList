// console.log(module);

exports.getDate = function (){
  let today = new Date();
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }
  console.log("exported date module");
  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function (){
  let today = new Date();
  let options = {
    weekday : "long",
  }
  console.log("exported date module");
  return today.toLocaleDateString("en-US", options);

};
