# Generic
- Generic is usedd to create a component which can work with a variety of data type rather than a single one.
- It allows a way to create reusable components.
- It ensures that program is flexible as well as scalable in the long term.Typescript uses generics with the type variable <T> that denotes types.
- the type of generic functions is just like non-generic functions,with the type parameters listed first , similarly to functon declarations.
- Type Safety:
- We can hold only a single type of objects in generic.It doesn't allow to store other objects.
- Typecasting is not required :
- Ther is no need to typecast the object.
- Compile-Time Checking :
- It is chesked at compile time so the problem will not occur at runtime.

# Module
- The Typescript code we write is in global scope by default.
- If we have multiple files in a project,the variables ,functions,etc, Written in one file are accessible in all the other files.
- Export:
- A module can be defined in a separate  .ts file which can contains,interfaces,classes and variables.
- Use the prefix export with all the definitions you want to include in a module and want to access from other modules.