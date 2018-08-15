import Component from '@ember/component';

export default Component.extend({
    output: "0",
    
    actions: {
        show: function(number) {
            let value = this.get('output');

            if (value === "0") {
                value = "";
              }
        
            value += number;

            this.set('output', value);
      }
    }
});
