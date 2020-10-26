function getPosition(text){
  var cell = $("td").filter(function() {
    return $(this).text() === text;
  })

  let column = cell[0].cellIndex;
  let row = cell.closest("tr").index();
  return {
    column,
    row
  }
}


console.log(getPosition("Canada"))
