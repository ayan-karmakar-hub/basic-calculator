
/********** Summary ***********/

For this project, I created a simple calculator. Designing the UI and making
sure all the numbers and characters were in equally sized boxes was the first
challenging obstacle. I eventually realized that a the entire calculator was
a container, and the squares containing each character are separate from the
actual characters themselves.

The other obstacle was dealing with all the edge cases that could cause errors.
ex. Trying to add multiple decimal places, dividing by 0, not pressing "="
in between operations. I had some friends try to break the calculator, and they
were able to find a couple bugs that I fixed.

The one thing I wasn't able to implement was proper pemdas rules. If someone
pressed "9+3*3=" it would equal 36 instead of 18.

/******** Relevant Files *********/

index.html: Some basic html with the calculator and all its buttons  added.

styles.css: The main styling for the calculator and all its buttons. Added the
background colors and formatted it to look like a simple calculator.

calc.js: The workhorse for all the operations the calculator performs.