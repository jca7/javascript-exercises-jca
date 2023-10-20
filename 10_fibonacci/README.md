# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
> In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
> To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```

fibonnaci sequence notes/plan

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.

1. fibonacci(1) = 1 [0]

2. fibonacci(2) = (1 + 0 = 1) [0, 1]

3. fibonacci(3) = (1 + 1 = 2) [0, 1, 2]

4. fibonacci(4) = (2 + 1 = 3) [0, 1, 2, 3]

5. fibonacci(5) = (3 + 2 = 5) [0, 1, 2, 3, 5]

6. fibonacci(6) = (5 + 3 = 8) [0, 1, 2, 3, 5, 8]

7. fibonacci(7) = (8 + 5 = 13) [0, 1, 2, 3, 5, 8, 13]

xn = xn - 1 + xn - 2 
x9 = x9 - 1 + x9 - 2 
x9 = x8 + x7 
x9 = 21 + 13
x9 = 34

currentValue = [currentValue - 1] + [currentValue - 2]


fibonacci(4)
- this would then get the element at position 4
- 1, 1, 2, 3 <--- return back 3

4 would tell the code to loop 4 times.
i.e. 

iv + 0 
iv + 1 
iv + 2
iv + 3 


after we account for 1s and 0s for n:
  else {
    do fibonacci calculation ( xn = [xn - 1] + [xn - 2] )
  }


intial value = 1

iV + 0, iV+1, iV+2, iV+3

 input n =		  0 1	2	3	4	5	6	7	8	9	10	11	12	13	14	...
 fibonacci n =	0	1	1	2	3	5	8	13	21	34	55	89	144	233	377
 
so if we get fibonacci(4) 

fibonacci(4) =  (f4-1) => f3 + (f4 - 2) => f2 
fibonacci(4) = ( 2 + 1 = 3 )

we need to continously add previous numbers
(1 + 1), (2+ 1), (3 + 2), (5 + 3) etc... 

lets just say our initial value is 1 because we are accounting for 1s and 0s in the if statement already. 

so if runningValue = 1 

for loop? 

  ex.

  runningValue = 1 

  1. so if it was fibonacci(2) / n = 2
   - we want to add i to it? so add 1 + i(0) = fibonacci(2) = 1
   - this would look like intialValue = 1 + 0 = 1

  2. if it was n = 3 
   - runningValue is now 1 +i(1) = 2 
   - this would look like runningValue = 1 + 1 = 2  
   - return runningValue = 2 

  3. if it was n = 4 
   - runningValue is now = 2 
   - we'd then do runningValue = 2 + i(2) 
   - return runningValue = 3 

  4. n = 5 
   - runningValue = 3 
   - runningValue + i(3)
   - Calculation: runningValue = 3 + i(3) = 2 
   - return runningValue = 5

  5. n = 6 
   - runningValue = 5 
   - runningValue + i(4)
   - 5 + i(4) = 3 ===> 8 
   - return runningValue = 5


fibonacci(6) 
runningValue = 5 
runningValue + i[4] 
return runningValue = 8
