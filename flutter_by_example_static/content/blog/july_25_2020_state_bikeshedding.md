# Flutter state management and bikeshedding. It doesn't (really) matter which library you use.

## What is the real goal of this conversation?
ensuring that we no longer have to think

## What is the real goal of any software / lib
To make good, working software. period.

## main point, it does not matter

=====

## Flutter state management bike-shedding: it doesn't matter

The thesis statement of this post is simple: Quit wasting your time debating state management libraries. 

Unfortunately, in the Flutter community, I'm seeing a major JavaScript-community-esque conversation going on
 _constantly_. It all starts with one of these questions: 

- "Which state management library do you recommend?"
- "Should I use Bloc or Provider on my new project?"

Or, the even more dubious:

- "Should I migrate my project to The New Hot Library?"

The answer to that last question from anyone worth their salt would be something like "What problems are you running
 into now with your current solution?". Which, by the way, is a way to lead you to the real answer: NO. You absolutely should not.

Before I get into my final explanation of why these are just silly distractions, consider the following positive
 outcome from having this conversation.

First, it'll probably push a lot of people to attempt to make new, better libraries _for future developers and
 projects_. (That piece is key.) Much like the endless framework debate (and race) in JavaScript land, where people
  are arguing the validity of Angular vs React vs Vue vs Other New Shit at nauseum. Truly, it never ends.

In a way, highlighting my first point, this isn't all bad. It's possibly what's responsible for the creation of
 Angular or React or Vue in the first place. It's (seemingly) a drive to make something better than the currently available tools. 

Great. I'm on board with this. _But_, (to continue the web-framework example), we now have Angular and React and Vue
. These are all great products with pros and cons that can help developers build great software for the web. Do we
 really need another? What are the limitations of the current frameworks? At what point do we say "Great, we have
  plenty of great options, lets get to work on our domain problems." (And, as we all know, very few business' domains
  is "developer tools".)

When does this positive outcome (innovation) become a problem? As soon as we start [bike shedding](https://en.wikipedia.org/wiki/Law_of_triviality) about using
 this innovation to solve problems that _don't exist_.

Before going down that rabbit hole, let me define what (I believe) the point of all these state management libraries
 is in the first place: _To allow us to quit thinking about state management_. Or, _to quit wasting time thinking about a solved problem_. 

State management is hard, and having a good tool to help out with it is important. But that's all you need: a good tool.

So, if my theory of why we use libraries is correct, why are we wasting so much time thinking about a solved problem
?  The only justifiable answers I can come up with are:

- It's fun. (This is valid, and by all means, continue.)
- We don't yet have a satisfying tool for the job. (I don't believe this to be true.)  

I'll ignore the first answer. As for the second, let me just say: There _are_ great tools for state-management. I
 have used many of them for apps at jobs that are used by thousands of businessness for mission critical work. They
  are battle tested. I have built working software using libraries like Bloc, Provider, and even vanilla Flutter
  , and people are out in the world using that software today. 

And, that brings me to my ultimate point: The end goal of every line of code you write is to create _good, working
 software_ for your _end users_. And I guarantee that those users don't care one bit.  
 
 Just as Angular, Vue and React can be used as a tool to build _good, working software_ for the web, all these
  different state management libraries can be used to create _good, working Flutter apps_. Period.
 
 
 So, should you migrate your project from Provider to The Next Big Thing? Does your software work? Then no, you
  absolutely should not. 
  
If you're starting a new project, what should you use? Surely that matters...

It does! Use whatever technologies make YOU the most productive. If you're dang good at using bloc, but you've never
 used Provider, don't sweat it! Use bloc! Who cares? Your end users certainly do not.

If you're a super productive React Native developer, then you probably don't need to learn Flutter. (Repeat forever
 about every programming language, framework, etc.)