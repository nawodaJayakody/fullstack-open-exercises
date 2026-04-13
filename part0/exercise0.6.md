sequenceDiagram
    participant browser
    participant server

    Note right of browser: User clicks Save. JS captures the event.
    Note right of browser: JS adds the new note to the local list and rerenders it immediately.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (with JSON data)
    activate server
    server-->>browser: 201 Created (Success)
    deactivate server

    Note right of browser: No page reload occurs. The UI was already updated by JS.