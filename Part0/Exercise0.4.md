LINK: [[https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgMC40OiBudWV2YSBub3RhCgpicm93c2VyLT5zZXJ2ZXI6IEhUVFAgUE9UIGh0dHBzOi8vc3R1ZGllcy5jcy5oZWxzaW5raS5maS9leGFtcGxlYXBwL25ld19ub3RlCgA-Bi0tPgBPBwBHB3N0YXR1cyBjb2RlIDMwMiByZWRpcmVjdABmF0dFAFAtb3RlcwByCABtDE1MLQBtBQAhRW1haW4uY3MAVhMAEQkAHklqAE4YanMKbm90ZSBvdmVyIACCWwgAgzoIIHN0YXJ0cyBleGVjdXRpbmcganMAgXwFCnRoYXQgcmVxdWVzdHMgSlNPTiBkYXRhIGZyb20gAINxBiAKZW5kIACDPwUAglBEZGF0YS5qc29uAIN_E1t7IGNvbnRlbnQ6ICJIVE1MIGlzIGVhc3kiLCBkYXRlOiAiMjAxOS0wNS0yMyIgfSwgLi4uXQoAgV4cAIFtBmVzIHRoZSBldmVudCBoYW5kbGVyAIF0CG5kZXJzAIFbBXMgdG8gZGlzcGxheQCBbAk&s=default]]

title 0.4: nueva nota

browser->server: HTTP POT https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: HTTP status code 302 redirect
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server->browser: HTML-code 
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->browser: main.js
note over browser:
browser starts executing js-code
that requests JSON data from server 
end note
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note