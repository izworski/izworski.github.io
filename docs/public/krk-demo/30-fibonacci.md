# Basic Python Exercises

## Fibonacci

### Story

Your boss is obsessed with mathematics and he likes to challenge you with math examples. In this week, he walks around the office and asks specific Fibonacci numbers from everyone in your department. To trick him, you decided to write a magical program (python script) that calculates some of them and share it with your colleagues, so everyone can answer immediately. Hopefully, he stops his weird bullying after he sees that all the people in his office know these numbers :)

### Description

Write a script that prints out the first 30 numbers of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) to the standard output.

### Expected Console Output

<https://code-embed-lti.herokuapp.com/placement/7abrxDjDHr7g2yDES0qy>

Here you can see the flowchart of a possible solution:

![Fibonacci sequence.png](media/Python%20module%20resources/Fibonacci%20sequence.png)

### Variations

  1. Add an input that asks how many numbers the User wants to print out.
  2. Use a dynamic number of spaces between the sequence id (first, second, etc..) and the value, to place the values into one column:
<https://code-embed-lti.herokuapp.com/placement/l30zoh50QF1pvxYSrJkC>



## Dice for Risk

### Story

You plan to play [Risk](https://en.wikipedia.org/wiki/Risk_%28game%29) with some friends but you suddenly realize, you lost all your dice. As your evening is well planned, you can't let your friends down, so you start to write a script that helps you out. (Here's [another explanation of the game](https://www.wikihow.com/Play-Risk#Attacking_sub) illustrated with pictures.)

### Description

Write a python script, that generates 5 numbers between 1 and 6 and prints them in a meaningful way for the game. Sort the results for the attacker and for the defender, so make roll pairs, like in this image:

![](http://www.ultraboardgames.com/risk/gfx/example.gif)

In a dice pair, there are the following rules:

  * When the attacker's die value is larger: Attacker wins (1 defender unit dies)
  * When the 2 dice value is tie: Defender wins (1 attacker unit dies)
  * When the defender's die value is larger: Defender wins (1 attacker unit dies)



### Expected Console Outputs

<https://code-embed-lti.herokuapp.com/placement/wJgvhGfDEZbqGQ4f4D3T>

### External resources

Help for generating a random number: <http://stackoverflow.com/a/4522753>

### Variations

  1. Calculate the Outcome of the rolls:
<https://code-embed-lti.herokuapp.com/placement/5jStvYEhHT6vKN2BuMfu>
  2. Add 2 questions and inputs, where the users can set how many attackers and defenders play in the current roll. Limit the attackers to only type 1, 2 or 3, and the defender to type only 1 or 2.
<https://code-embed-lti.herokuapp.com/placement/hkRlVVsS5YcqqRlrATVP>



## Ideabank

### Story

You have a brilliant mind and you come up with better and better ideas every day. The problem is, you would forget them quickly, so you decide to write an app that helps you keep track of them.

### Description

Write an application that can save the given text into a local file. After saving the idea, it should show the existing ideas as well. The app should append the new idea into the file, to allow multiple ideas to be saved.

### Expected Console Output

<https://code-embed-lti.herokuapp.com/placement/9HRBBpMt2ZfSaF05KaEb>

### Variations

In these extensions, you will need to use command line arguments. To reach them with Python, read the following [tutorial](http://www.pythonforbeginners.com/system/python-sys-argv).

  1. Add the option to list all the existing ideas with command line argument without adding a new one.
<https://code-embed-lti.herokuapp.com/placement/Bbqp8Igs36DMrsNxBuZj>
  2. Add an option to remove an idea by the id of it. Use console arguments.
<https://code-embed-lti.herokuapp.com/placement/hxEhtiLXoIXvRay3PImX>


