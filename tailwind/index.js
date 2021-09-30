document.getElementById("result").onclick = () => {
  document.getElementById("clear").value = "";
};

let app = _v => {
  // document.querySelector( 'input' ) = "";
  document.querySelector('input').value += _v;
};

let total = document.getElementById("clear");
function edit(elem) {
  total.value = total.value + elem.value;
}
function calc() {
    total.value = new Function("return " + total.value)();
    // update( gokei.toString() )
  }


// let calc = () => {// 「＝」ボタンが押されたので計算する
  // const vv = document.querySelector('input').value;
  // console.log("ok");
  // const f = parseInt('input') + vv; 
  // console.log(f);
  // update( f().toString() )
// };

// function calc() // 「＝」ボタンが押されたので計算する
//     {
//         const v = document.querySelector( 'input' ).value
//         const f = new Function( 'return ' + v )
//         update( f().toString() )
//     }

  // // This function display values
  // function display(value) {
// document.getElementById("result").onclick = () => {
//   document.getElementById("text").value += value;
// };
  // }
  // // This function evaluates the expression and return result
  // function calculate() {
  // let p = document.getElementById("result").value;
  // let q = eval(p);
  // document.getElementById("result").value = q;
  //