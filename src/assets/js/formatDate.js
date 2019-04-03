export function formatDate (date) {
  var t = new Date(date)
  var y = t.getFullYear()
  y = y < 10 ? '0' + y : y
  var m = t.getMonth() + 1
  m = m < 10 ? '0' + m : m
  var d = t.getDate()
  d = d < 10 ? '0' + d : d
  return y + '-' + m + '-' + d
}
