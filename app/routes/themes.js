import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').findAll('theme');
    },
    actions: {
        defaultTheme() {
            // Ideally, I would have liked to somehow store this to an object.
            // Then somehow pass the object to a handlebars property
            Ember.$(theme_header)[0].innerHTML = "Ember Calculator - Default Theme";
            Ember.$(gridCalcThemeRoot)[0].className = "";
            this.transitionTo('/');
        },
        setTheme(theme) {
            // Ideally, I would have liked to somehow store this to an object.
            // Then somehow pass the object to a handlebars property
            Ember.$(theme_header)[0].innerHTML = `Ember Calculator - ${theme.name} Theme`;
            Ember.$(gridCalcThemeRoot)[0].className = "";
            Ember.$(gridCalcThemeRoot)[0].classList.add(`gridCalc-theme--${theme.name}`);
            this.transitionTo('/');
        }
    }


});