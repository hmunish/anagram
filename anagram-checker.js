module.exports = function (string1, string2) {
  // write your code here
  let str1 = string1.replaceAll(/[^a-zA-Z]/g, "").toLowerCase();
  let str2 = string2.replaceAll(/[^a-zA-Z]/g, "").toLowerCase();
  let res1 = 0,
    res2 = 0;

  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      res1 += str1.charCodeAt(i);
      res2 += str2.charCodeAt(i);
    }
    return res1 == res2;
  } else {
    return false;
  }
};
