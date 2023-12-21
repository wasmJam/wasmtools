/**
 * Every entry must include a title and link, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     link: string // the link for the website which contain learning resources
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your repo
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 * }
 */

const entries = [
  {
    "title": "emscripten-core",
    "link": NaN,
    "description": "Emscripten: An LLVM-to-WebAssembly Compiler",
    "tag": "compiler",
    "github": "emscripten-core/emscripten"
  },
  {
    "title": "binaryen",
    "link": NaN,
    "description": "Optimizer and compiler/toolchain library for WebAssembly",
    "tag": "compiler",
    "github": "WebAssembly/binaryen"
  },
  {
    "title": "tinygo",
    "link": NaN,
    "description": "Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.",
    "tag": "compiler",
    "github": "tinygo-org/tinygo"
  },
  {
    "title": "Bytecoder",
    "link": NaN,
    "description": "Framework to interpret and transpile JVM bytecode to JavaScript, OpenCL or WebAssembly.",
    "tag": "compiler",
    "github": "mirkosertic/Bytecoder"
  },
  {
    "title": "assemblyscript",
    "link": NaN,
    "description": "A TypeScript-like language for WebAssembly",
    "tag": "compiler",
    "github": "AssemblyScript/assemblyscript"
  }
];

export default entries;
