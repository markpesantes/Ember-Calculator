import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "data": [
                {
                  "type": "theme",
                  "id": "1",
                  "attributes": {
                      "class-name":"light",
                      "name":"Light"
                    }
                },
                {
                  "type": "theme",
                  "id": "2",
                  "attributes": {
                    "class-name":"dark",
                    "name":"Dark"
                  }
                },
                {
                  "type": "theme",
                  "id": "3",
                  "attributes": {
                    "class-name":"colors",
                    "name":"Colors"
                  }
                }
              ]
            }      
    },
    actions: {

    }


});