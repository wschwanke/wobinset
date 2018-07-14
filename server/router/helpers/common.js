const commonRouteFuncs = {};

/*************
checkForFileExt(url)
  Checks the given url to see if it has a file extension on it.
  It will return true is there is one and false if there is not.
*************/
commonRouteFuncs.checkForFileExt = (url) => {
  let fileExtRegEx = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi;
  
  if (url.match(fileExtRegEx) !== null) {
    return true;
  }
  return false;
}

module.exports = commonRouteFuncs;