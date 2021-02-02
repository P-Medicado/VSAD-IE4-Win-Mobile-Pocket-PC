### Can I Use
Can I Use prints an HTML table of common JavaScript features alongside the 
version of IE the feature was added. The table executes a test on the visiting 
browser, then highlights a cell of each row to identify whether or not that 
feature is present.
  
### JS Repl
Here you can try out JavaScript on Pocket IE devices. No dev tools needed. 
Creating global variables using `window["my_var_name"] = something` allows 
you use data in more than one line execution. Execution errors are printed 
to the DOM in red. The repl allows for scroll logs to see previous executions.

### User-Agent
Uses known user agents to identify Internet Explorer, Microsoft Edge, 
or Chromium-based Edge.
  
### IE-JS-Version
Uses Internet Explorer's "Conditional Comments" (`@cc`) to extract the reported 
JavaScript version of the browser. Non-IE browsers do not see JavaScript 
within cc.
  
### Benchmark
Allows you to test how using JavaScript classes impact performance. 
It is known that prototype method appending is faster than instance 
method appending.