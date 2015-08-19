# Animations with ngAnimate

Animation is increasingly becoming a requirement, not simply an enhancement for high quality applications, subtle animations make the app feel more professional, polished and delightful to users. Angular makes it very easy.

Why Add Animations? Animation is very effective in accomplishing a few goals.
* Draw Attention
* Convey Idea
* Reduce Complexity
* Add Delight

Angular's ngAnimate module enables Angular's core directives to automatically adds CSS classes to their respective DOM elements that we could hook into for providing animations.

Here's the demo file - [here]()

To use animations, we need to include the angular-animate.js library and add the module `ngAnimate` as a dependency in the module, as shown below.

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular-animate.js"></script>
```

```js
var app = angular.module("yourAppName", ['ngAnimate']);
```

#### ng-hide & ng-show

Animating the transition between true and false states for ng-show and ng-hide is as simple as defining an extra CSS class for your-css-selector.ng-hide. The .ng-hide CSS will be activated when the element is being hidden. For example, take this div named `add-new`:

```html

<div class="add-new form-group col-sm-11 col-sm-offset-1" ng-show="contactCtrl.showForm" ng-submit="contactCtrl.addNew()">
  <form  class="form-horizontal" novalidate>
  ...
```
To have this form fade in and out when it's being shown or hidden (respectively), the CSS would look like this:

```css
.add-new {
  -webkit-transition: 0.5s linear all 0.2s;
  -moz-transition: 0.5s linear all 0.2s;
  -o-transition: 0.5s linear all 0.2s;
  transition: 0.5s linear all 0.2s;
}

.add-new.ng-hide {
  opacity: 0;
}
```

```css
/* Apply to all changed properties */
/* property duration | timing function | name or all | delay */
transition: 0.5s linear all 0.2s;
```
#### ng-hide & ng-show


If you want to find out more about the CSS transition property - [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Notice that we're using the CSS transition property to set the duration of the animation - ngAnimate takes note of this property and will perform its magic.

#### Animate entrances & exits of ng-repeat elements

ngAnimate provides CSS classes for ng-repeat elements when they're appearing, disappearing, and moving to a new index (.ng-enter, .ng-leave, and .ng-move respectively). To demonstrate, lets create an ng-repeat where the elements fade in and out for all three of these animation states.

```html
<div class="row contactlist">
  <div ng-repeat="person in contactCtrl.people | orderBy: sort | filter:search" class="col-sm-12 person">
    <div class="contact-image"></div>
    <span><strong>{{ person.name }}</strong></span>
  </div>
</div>
```

```css
.person.ng-move,
.person.ng-enter,
.person.ng-leave {
  -webkit-transition: 0.5s linear all;
  -moz-transition: 0.5s linear all;
  -o-transition: 0.5s linear all;
  transition: 0.5s linear all;
}

.person.ng-enter,
.person.ng-move {
  opacity: 0;
  height: 0;
  overflow: hidden;
}

.person.ng-move.ng-move-active,
.person.ng-enter.ng-enter-active {
  opacity: 1;
  height: 60px;
}

.person.ng-leave {
  opacity: 1;
  overflow: hidden;
}

.person.ng-leave.ng-leave-active {
  opacity: 0;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
```

These animations are especially neat when your ng-repeat is using dynamic filters or ordering. It provides immediate feedback to the user that the application is changing based on their input in a very delightful way.

#### Using Animate.css for CSS Animation  ---- incomplete

First, we need to include Animate.css library.


```html
<link https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css>
```

#### Other ngAnimate supported directives

We've covered a few basic usage of ngAnimate with ng-hide/ng-show, ng-repeat and ng-class. This knowledge can be directly applied to animating many of the other directives present in Angular - below is a list of all the directives with their corresponding CSS classes:

* ngRepeat: enter, leave and move

* ngView: enter and leave

* ngInclude: enter and leave

* ngSwitch: enter and leave

* ngIf: enter and leave

* ngClass: add and remove (the CSS class(es) present)

* ngShow & ngHide: add and remove (the ng-hide class value)

* form & ngModel: add and remove (dirty, pristine, valid, invalid & all other validations)

* ngMessages: add and remove (ng-active & ng-inactive)

* ngMessage: enter and leave

#### Other Resources:

* https://docs.angularjs.org/api/ngAnimate
* https://developer.mozilla.org/en-US/docs/Web/CSS/transition
* https://daneden.github.io/animate.css/
* https://docs.angularjs.org/api/ngAnimate/service/$animateCss
