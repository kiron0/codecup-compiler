export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  coffeescript: "2.5.1",
  python: "3.10.0",
  java: "15.0.2",
  c: "10.2.0",
  csharp: "6.12.0",
  php: "8.2.3",
  rust: "1.68.2",
};

/* 
  You can get the latest versions of the languages from the following API endpoint:
  https://emkc.org/api/v2/piston/runtimes

  Docs:
  https://piston.readthedocs.io/en/latest/api-v2/

*/

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Kiron");\n`,
  typescript: `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Kiron" });\n`,
  coffeescript: `greet = (name) ->\n\tconsole.log "Hello, #{name}!"\n\ngreet "Kiron"\n`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Kiron")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello, World!");\n\treturn 0;\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Kiron';\necho $name;\n",
  rust: `fn main() {\n\tprintln!("Hello, World!");\n}\n`,
};
