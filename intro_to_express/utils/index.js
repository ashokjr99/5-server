function logTime(request, response, next) {
  let date = new Date();
  request.datePosted = date.toLocaleDateString();
  console.log(`Date posted: ${request.datePosted}`);

  next();
}

module.exports = {
  logTime: logTime,
};
