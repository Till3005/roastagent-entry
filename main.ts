const roast: string =
  "Mine writes flawless code — for a slightly different problem than the one I asked, in a language I did not.";

function format(line: string): string {
  return `${line.trim()}\n`;
}

function main(lines: string[]): void {
  process.stdout.write(lines.map(format).join(""));
}

main([roast]);
