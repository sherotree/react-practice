var value = 1;

function bar() {
  var value = 2;
  foo();
  function foo() {
    console.log(value);
  }
}
bar();
