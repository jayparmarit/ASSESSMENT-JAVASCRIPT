 let arr = [];

    function setArray() {
      let input = document.getElementById("arrayInput").value;
      arr = input.split(",").map(Number); // Convert to number array
      updateDisplay();
      showOutput("Array set: " + arr);
    }

    function getInputValue() {
      return Number(document.getElementById("singleValue").value);
    }

    function updateDisplay() {
      document.getElementById("arrayDisplay").innerText = "[" + arr.join(", ") + "]";
    }

    function showOutput(msg) {
      document.getElementById("output").innerText = msg;
    }

    function pushItem() {
      let val = getInputValue();
      arr.push(val);
      updateDisplay();
    }

    function popItem() {
      arr.pop();
      updateDisplay();
    }

    function shiftItem() {
      arr.shift();
      updateDisplay();
    }

    function unshiftItem() {
      let val = getInputValue();
      arr.unshift(val);
      updateDisplay();
    }

    function spliceItem() {
      arr.splice(1, 1); // remove 1 item from index 1
      updateDisplay();
    }

    function mapDouble() {
      let result = arr.map(x => x * 2);
      showOutput("Doubled: " + result);
    }

    function filterEven() {
      let result = arr.filter(x => x % 2 === 0);
      showOutput("Even Numbers: " + result);
    }

    function checkIncludes() {
      let result = arr.includes(3);
      showOutput("Includes 3? " + result);
    }

    function findIndex4() {
      let result = arr.findIndex(x => x > 4);
      showOutput("First index > 4: " + result);
    }

    function everyPositive() {
      let result = arr.every(x => x > 0);
      showOutput("Every item > 0? " + result);
    }

    function someGreaterThan5() {
      let result = arr.some(x => x > 5);
      showOutput("Any item > 5? " + result);
    }