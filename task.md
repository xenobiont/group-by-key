# Task

Write a function `groupByKey`, that will take an array of objects and key name as second argument, and return a map of these objects, grouped by this property value.

It is assumed this property values can coincide, so the resulting map should have collections of the objects as its values.

the function should be type-safe

### advanced

Created a type alias, that will allow you to keep in the resulting type the information about exact property name that was used to group the objects

## Hints

You'll need to use `keyof` operator and indexed type access
