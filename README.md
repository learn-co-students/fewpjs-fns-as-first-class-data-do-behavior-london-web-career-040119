# JavaScript Fns as First Class Data: Do behavior

## Learning Goals

- Create a JavaScript function triggered by an event

## Introduction

In review, functions in JavaScript are first-class data. They are
treated like any other variable and we can pass them as values to other
functions. In this lab, we're going to demonstrate some of JavaScript's
capabilities.

### Create a JavaScript Function Triggered by an Event

We're going to create a web greeting! Working in [24 hour
time](https://en.wikipedia.org/wiki/24-hour_clock), create a set of conditions
that will give the user different greetings depending on the time that is
submitted.

We've given some starter code in `index.html` that contains a form
field and an `h1`. Create a function called `greet` in `index.js`
that will produce  the following results when the `submit` button
is _clicked_:

- If the time is earlier than 12pm, return "Good Morning."
- If the time is between 12pm and 5pm, return "Good Afternoon."
- If the time is later than 5pm, return "Good Evening."
- If any other input is given, return "Hello."

## Conclusion

This lab demonstrates just the tip of the iceberg when it comes to leveraging
the power of JavaScript functions. There are heaps features that JavaScript has
— some are even comparable to Ruby and other programming languages. We'll be
exploring more on JavaScript events in the next lesson.
