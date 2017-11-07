function convertDate (epoch) {
  var date = new Date(epoch * 1000)
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  return day + '/' + month + '/' + year
}

export default convertDate
