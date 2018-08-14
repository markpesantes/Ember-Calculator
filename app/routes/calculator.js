import Route from '@ember/routing/route';

export default Route.extend({
    
    actions: {
        show: function(number) {
            console.log(number);
      }
    }
});
