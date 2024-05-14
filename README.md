# Super Awesome IDE

A Collaborative Online IDE

## Quick Start

1. Run the websocket server. Please see [saide-ws](https://github.com/thhuang/java-pono/tree/main/apps/saide-ws) for detailed instructions.
2. Run the IDE application.
   ```sh
   npm i
   npm run dev
   # The application is running at http://localhost:3000
   ```

### Docker

1. Build the container:
   ```sh
   docker build -t saide .
   ```
2. Run the container:
   ```sh
   docker run -p 3000:3000 saide
   # The application is running at http://localhost:3000
   ```
