let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.crossOrigin = 'anonymous';
script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
document.head.appendChild(script);

function changeValue(text,value){
  let pos = getPosition(text)
  console.log('position',pos);
  let actualRow = getActualRow(pos)
  console.log('actualRow',actualRow)
  // let selector = `table > tbody > tr:nth-child(${actualRow}) > td:nth-child(${pos.column}) ${element}`
  // $(selector).val(value)

  let selector1 = `table > tbody > tr:nth-child(${actualRow}) > td:nth-child(${pos.column}) input`
  let selector2 = `table > tbody > tr:nth-child(${actualRow}) > td:nth-child(${pos.column}) select`
  $(`${selector1},${selector2}`).val(value)
}

function getPosition(text){
  var cell = $("td").filter(function() {
    return $(this).text().includes(text);
  })

  let column = cell[0].cellIndex +1;
  let row = cell.closest("tr").index() +1;
  return {
    column,
    row
  }
}

function getActualRow(pos){
  let start = pos.row +1;

  for(let i = start; i<100; i++){
    let selector = `table > tbody > tr:nth-child(${i}) > td`
      let height = $(selector).height();
      if(height > 0){
        return i;
        break;
      }
  }
}
