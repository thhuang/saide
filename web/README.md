# Super Awesome IDE - Web

A Collaborative Online IDE

## Quick Start

1. Run the websocket server. Please see [saide/crdt](../crdt/README.md) for detailed instructions.
2. Run the IDE web client.
   ```sh
   npm i
   npm run dev
   # The application is running at http://localhost:3000
   ```

### Docker

1. Build the container:
   ```sh
   docker build -t saide-web .
   ```
2. Run the container:
   ```sh
   docker run -p 3000:3000 saide-web
   # The application is running at http://localhost:3000
   ```
