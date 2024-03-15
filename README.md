# LangCore

technically a js substitution "framework"

## what is this

this project takes all the good parts of the (now defunct) WiLYSoft: HARD "engine", and merges it into a more extensible and readable format

## how to use

i've created a demo "package language" for syntax rules (.synmod) in LCM/lcm_packages and a "language" (verbose english) that takes all the .synmod packages and uses that for each LangCore module for better understanding of this system

## how it works

langcore works by going through each module (in the order it was added) and checking for a keyword then replacing it if it exists

## namespaces

think of something like the `console` constant like a namespace - it has console.log, console.debug, etc.  
namespaces are a similar concept- you may have multiple functions to log, but console.log will do its specific function.

for example, your namespace may be `MyCoolLang::` and you have a declaration `AAAA` to `console.log`. this looks like

```txt
MyCoolLang::AAAA ("Hi")
```

and gets "compiled" into

```js
console.log ("Hi")
```

## macros

if you need something from another module, you can create a macro that works in the global namespace.

declaring a macro `@test` to `hi` will allow you to do

```js
console.log(@test)
```

which will turn into

```js
console.log('hi')
```

## why

yes
