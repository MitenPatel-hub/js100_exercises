/* Challenging Exercise: This exercise has nothing to do with this chapter. 
Instead, it uses concepts you learned earlier in the book. If you can't 
figure out the answer, don't worry: this question can stump developers with 
more experience than you have.

Consider this code:

> let x = "5"
> x = x + 1 // implicit coercion converts 1 to "1"
= "51" // "5" + "1" === "51"

Now, consider this code:

> let y = "5"
> y++ // "5"++ => 5++ => 5 
= 5

What gets returned by y++ in the second snippet, and why?

My Answer:

The return value of y++ in the second snippet is 5. The ++ operator is interpreted
by JavaScript differently than the += operator in the specific context of string values
that consist of numeric characters. As shown with x += 1 in the first snippet, += leads to 
JavaScript coercing the 1 into a string and then concatenating that coerced string
value with the other string value. 

On the other hand, as shown with y++ in the second snippet, ++ leads to JavaScript first 
coercing whatever value is represented by y into a number and then adding 1 to that coerced 
numeric value. The reason the return value is 5 instead of 6 is because of another difference 
between += and ++ operations. With +=, the return value will be result of adding the two values. 
With ++, the return value will be the last value that was returned BEFORE adding the two values. 
To see the value6, you would need to call y++ again (i.e., in node) and then you would see the 
6 return.

Model Answer:

The return value is the numeric value 5.

If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets coerced 
to the number 5. After coercion, it then increments the value to 6. However, the return value is 
5 since the post-increment operator (y++) returns the original value of y, not the incremented 
value.

This shows that x++ is not the same thing as x = x + 1. */