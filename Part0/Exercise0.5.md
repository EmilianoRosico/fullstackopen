# title Excercise 0.5

This site was built using websequencediagrams [My diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgRXhjZXJjaXNlIDAuNQoKYnJvd3Nlci0-c2VydmVyOiBIVFRQIEdFVCBodHRwczovL3N0dWRpZXMuY3MuaGVsc2lua2kuZmkvZXhhbXBsZWFwcC9zcGEKADkGLT4ASQc6IEhUTUwtY29kZSAAH0VtYWluLmNzcwBXEgARCQCBBEcuagBSEwARBwpub3RlIG92ZXIgAIFhCACCOgggc3RhcnRzIGV4ZWN1dGluZyBqcwCBewUKdGhhdCByZXF1ZXN0cyBKU09OIGRhdGEgZnJvbSAAgnEGIAplbmQgbm90ZQCCTEZkYXRhLmpzb24AgxAIAIMOC1t7Y29udGVudDogInRlc3QgMTIzIiwgZGF0ZTogIjIwMjEtMTEtMjdUMDg6NDg6MjEuNDY3WiJ9LOKApl0AgWUdAIF1BmVzIHRoZSBldmVudCBoYW5kbGVyAIF8CG5kZXJzAIFjBXMgdG8gZGlzcGxheQCBcgs&s=default).

**Code:**
```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server->browser: HTML-code 
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{content: "test 123", date: "2021-11-27T08:48:21.467Z"},…]

note over browser:
browser executes the event handler
that renders notes to display
end note
```