const fs = require("fs")

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function(err, data){
      if (err) {
        return reject(err)
      }
      return resolve(JSON.parse(data))
    });
  })
}
/**
 * 
 * @param {string} text 
 * @returns string
 */
const convertToEn = (text) => {
  return text.replace('Ğ','g')
        .replace('Ü','u')
        .replace('Ş','s')
        .replace('I','i')
        .replace('İ','i')
        .replace('Ö','o')
        .replace('Ç','c')
        .replace('ğ','g')
 	      .replace('ü','u')
        .replace('ş','s')
        .replace('ı','i')
        .replace('ö','o')
        .replace('ç','c').toLocaleLowerCase();
}

module.exports = {
  readFileAsync,
  convertToEn
}