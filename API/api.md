A Promise is a built-in JavaScript object that represents a value that may not be available yet, but will be in the future.

It’s used to handle asynchronous operations — like fetching data from an API, reading a file, or waiting for something to happen.

Think of it as:

“Hey JavaScript, I promise to give you this value later. When I’m done, I’ll either give it to you, or I’ll tell you something went wrong.”



# 🧠 Why Do We Need Promises?
JavaScript is single-threaded — it runs one thing at a time.

But real apps do things that take time, like:

Downloading data from a server

Reading from a database

Waiting for user input

If we waited for those to finish before running anything else, the whole app would freeze! 😱

So JavaScript says:

"Let me keep running the rest of the code. When that slow thing finishes, tell me — I’ll deal with it then."

That’s where Promises come in — they let us schedule what to do later when an async task finishes.

 # 📦 How Does a Promise Work?
A Promise has 3 states:

State	Meaning
Pending	The async task hasn’t finished yet.
Fulfilled	It completed successfully → we call resolve().
Rejected	It failed → we call reject().

