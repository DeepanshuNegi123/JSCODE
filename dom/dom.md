![alt text](https://github.com/DeepanshuNegi123/JSCODE/blob/9d95063d622805b9e39b3daa9c561a15ef400972/Screenshot%202025-01-31%20102658.png)


# DOM (Document Object Model)

The Document Object Model, or DOM for short, represents all page content as objects that can be modified.

The document object is the main “entry point” to the page. We can change or create anything on the page using it.


## DOM tree
The backbone of an HTML document is tags.

According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

All these objects are accessible using JavaScript, and we can use them to modify the page.

```
(documnent.body)

is the object representing the <body>

document.body.style.background = "blue"; 

// makes background blue .

setTimeout(()=>document.body.style.background ='',3000);
```

## DOM TREE STRUCTURE
```
<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
```
how it looks 
