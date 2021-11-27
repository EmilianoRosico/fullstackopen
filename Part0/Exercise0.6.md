# title Excercise 0.6

This site was built using websequencediagrams [My diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgRXhjZXJjaXNlIDAuNgoKbm90ZSBvdmVyIGJyb3dzZXI6CkxhIHZlcnNpw7NuIFNQQSBkZSBsYSBhcGxpY2FjABEFbm8gZW52w61hIGxvcyBkYXRvcyBkZWwgZm9ybXVsYXJpbwoALwZmb3JtYSB0cmFkaWNpb25hbCwgc2lubyBxdWUgdXRpbGl6YSBlbCBjw7NkaWdvIEphdmFTY3JpcHQgcXVlCm9idHV2bwBVBXNlcnZpZG9yLiAKZWwgY29udHJvbGFkb3IgZGUgZXZlbnRvcyBjcmVhIHVuYSBudWV2YSBub3RhLACBNgVncmVnYSBhIGxhIGxpc3RhCmRlABkFcyBjb24AfAVvbWFuZG8gbm90ZXMucHVzaChub3RlKSwgdnVlbHZlIGEgcmVwcmVzZW50YXIgbGEKAEMFIAA_CWVuIGxhIHDDoWdpbmEgeQCCFgkAgQAMIGEAgT0LCmVuZABqBQoAgnEHLT5zZXJ2ZXI6IEhUVFAgUE9TVCBodHRwczovL3N0dWRpZXMuY3MuaGVsc2lua2kuZmkvZXhhbXBsZWFwcC9uZXdfbm90ZV9zcGEAghoFZW50LXR5cGU6SlNPTgoAVQYtLT4Ag10IAF8Gc3RhdHVzIGNvZGUgMjAxIChDcmVhdGVkKQo&s=default).

**Code:**
```
title Excercise 0.6

note over browser:
La versión SPA de la aplicación no envía los datos del formulario
de la forma tradicional, sino que utiliza el código JavaScript que
obtuvo del servidor. 
el controlador de eventos crea una nueva nota, la agrega a la lista
de notas con el comando notes.push(note), vuelve a representar la
lista de notas en la página y envía la nueva nota al servidor.
end note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa content-type:JSON
server-->browser: HTTP status code 201 (Created)
```