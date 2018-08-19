import Component from '@ember/component';

const calculate = (n1, operator, n2) => {
    let result = ''

    switch(operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        default:
            break;
    } 
  
    return result
};

export default Component.extend({
    output: "0",
    actions: {
        input(value) {
            let display = this.get('output');
            let key = value;

            // If we have an operator
            if (isNaN(key)) {
                let firstValue = display;
                let operator = key;
                
                // If our current keypress is not an equal or decimal
                if (key != "=" && key != ".") {
                    this.set('data-prevOperator', key);
                }

                // If we have a decimal and one was not already entered
                if (operator === "." && this.get('data-operator') != '.' ) {
                    display = display + operator;
                }
                
                if (key === "=") {
                    let secondValue = display;
                    display = calculate(parseFloat(this.get('data-storedValue')), this.get('data-prevOperator'), parseFloat(secondValue));
                    this.set('data-storedValue', String(display));
                    this.set('data-operator', operator);
                    this.set('data-prevOperator', key);
                    
                } else if (key === "C") {
                    this.set('data-storedValue', "");
                    this.set('data-operator', "");
                    this.set('data-prevOperator', "");
                    display = "0";
                } else {
                    this.set('data-operator', operator);
                    this.set('data-storedValue', firstValue);
                }
                
            // If we have a number
            } else {
                if (this.get('data-operator') != '.') {
                    if (display === "0"  || this.get('data-operator') != '') {
                        
                        display = "";
                        // Need to clear the operator so that we can enter more than 1 number after operator
                        this.set('data-operator', "");
                    }
                }

                if (this.get('data-operator') == '=') {
                    display = "";
                    this.set('data-operator', "");
                }

                
                display = String(display) + String(value);
            }

            this.set('output', display);
            
      }
    }
});
