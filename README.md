# JavaScript Functions as First Class Data: Do behavior

## Learning Goals

- Create a JavaScript function triggered by an event

## Introduction

In JavaScript, functions are what's known as [first-class citizens](https://en.wikipedia.org/wiki/First-class_function) 
of the language. This means they can be treated like any other variable: they 
can be assigned to a variable, stored in a data structure, passed as an argument 
to another function, or be the return value of another function. In this lab, 
we're going to have an event handler send some information gathered by an 
`<input>` field to a helper function.

## Create a "First-Class" Function

We're going to create a web greeting! You're provided a text input field in which
you should enter a time in [24 hour time][24]. When you click the `Submit`
button, some provided code will run which will make calls to **two** functions.

## The `greet()` function

The `greet` function should take one argument, a `String` which specifies the
24-hour time in the format `HH:MM`.

- If the time is earlier than 12pm, return "Good Morning".
- If the time is between 12pm and 5pm, return "Good Afternoon".
- If the time is later than 5pm, return "Good Evening".

**NOTE:** The value returned from the `<input>` will be of type `String`.
You’ll need to take the `String` of the 24 hour time and convert it to a number.
The `split()` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
and `parseInt()` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) should help.

##  The `displayMessage()` function

The `displayMessage` function should take one argument, a `String`.

When the function runs it should update the text inside the `#greeting` node
with the content of the argument.

It does not return anything.

## Testing

Finally, open up your `index.html` file in the browser. After typing `15:00` in the input field and pressing the Submit button should, you should see "Good Afternoon" printed on the DOM.

Did it work? If so, take time to celebrate! Don't move on yet! Take some time to digest and internalize the code you've just wrote. If not, take time to debug.

## Conclusion

This lab demonstrates just the tip of the iceberg when it comes to leveraging
the power of JavaScript functions. There are heaps of features that JavaScript has
— some are even comparable to Ruby and other programming languages. We'll be
exploring more on JavaScript events in the next lesson.

[24]: https://en.wikipedia.org/wiki/24-hour_clock
