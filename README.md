This is an experimental TODO app with no MVC frameworks.

Nowadays most web-applications are written in complex frameworks, such as AngularJS and React, which all have their completely own way of doing things - even including their own flavours of JavaScript. However, most of what we try to achieve with those frameworks is also possible with a few utility functions. 

This repo demonstrates that by implementing a very basic TODO app with no framework whatsoever. 

Where the magic happens:
- [`on-insert`](https://github.com/TiddoLangerak/on-insert) is used to detect elements with a given tag. This makes components possible.
- Javascript template literals are used as template engine. [`html-template`](https://github.com/TiddoLangerak/html-template) is used to properly escape the templates.
- [`mixup`](https://github.com/TiddoLangerak/mixup) is used to attach state to components. 
- [`morphdom`](https://github.com/patrick-steele-idem/morphdom)\* is used for fast DOM updates. Note that this isn't strictly necessary, `innerHTML` will do as well. `morphdom` is just faster.

At the moment of writing the top 3 components have less than 70 loc *combined*. That is how little framework we need to create a component based web-application.

