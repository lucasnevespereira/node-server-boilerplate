# Node Server Boilerplate

A simple Node.js server boilerplate connected to a MongoDB database.


## Directory Structure
Here is a brief overview of the directory structure used in this boilerplate:

```bash
/project-root
|-- /src
|   |-- /clients          # Clients (handlers) process requests
|   |-- /config           # Loads config, reads env file
|   |-- /connectors       # Connectors interact with the external services
|   |-- /routes           # Define application routes here
|   |-- /types            # Define application types here
|   |-- /utils            # Define utils functions here
|   |-- server.ts         # Application server, entrypoint
|-- .env.example          # Example environment file
|-- package.json          # Project metadata and dependencies
|-- tsconfig.json         # TypeScript configuration
```

### Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/).

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/node-server-boilerplate.git
cd node-server-boilerplate
```

### Removing the Existing Git Origin
After cloning, remove the existing git origin to start with a fresh repository:

```bash
git remote remove origin
```

### Installing Dependencies

``` bash
npm install
```

### Running the Server
To start the server, run:

```bash
npm run start
```

To start the server with a watcher:

```bash
npm run dev
```

##### Development Tools
This project utilizes several useful libraries for development:

*TSX*

TSX allows you to run TypeScript code locally. To install it as a development dependency, use:

```bash
npm install tsx --save-dev
```

*TSUP*

TSUP is a TypeScript bundler that compiles TypeScript code to JavaScript. Install it with:

```bash
npm install tsup --save-dev
```

*VITEST*

VITEST is a testing framework with better support for TypeScript. Install it using:
```bash
npm install vitest --save-dev
```