module.exports = function textToNums (text) {
  numsFromText = []
  for (let i=0; i < text.length; i++) {
    numsFromText = [...numsFromText, text.charCodeAt(i)];
  }
  while (numsFromText.length % 10 != 0) {
    numsFromText = [...numsFromText, 32];
  }
  return(numsFromText)
}
