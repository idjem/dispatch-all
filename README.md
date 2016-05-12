# dispatcher

Used to broadcast payloads to registered callbacks. 

# API
- **register(function callback): string**
Registers a callback. Returns id that can be unregist.

- **unregister(string id): void**
Removes a callback based on its id.

- **dispatch(object payload): void** 
Dispatches a payload to all registered callbacks.
