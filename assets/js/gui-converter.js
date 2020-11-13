/**
 * @name parse
 * @description Analyze the code and transform it.
 * @async
 * @author Romitou
 */
// eslint-disable-next-line require-await
export async function parse (input, isUsingTab) {
  const code = input.split('\n');
  const softIndent = isUsingTab ? '\t' : '    ';

  let player = '';
  const output = [];
  let indentation = '';
  let guiSection = false;
  const executorRegex = new RegExp(/(player|executor|victim|attacker|{.*?})/, 'gim');
  const ofExecutorRegex = new RegExp(/ (of|to) (player|executor|victim|attacker|{.*?})/, 'gim');

  code.push(''); // Adding a new blank line to avoid errors with GUI section.
  for (let line of code) {
    if (!(line.startsWith(' ') || line.startsWith('\t')) && guiSection) {
      output.push(indentation + 'open last created gui to ' + player[0]);
      guiSection = false;
    } else if (/open virtual/gim.test(line)) {
      player = executorRegex.exec(line);
      let virtualInventory = /.*?(?<= with| named| to)/gim.exec(line)[0]; // We retrieve only the interesting part.
      virtualInventory = virtualInventory.split(' '); // We split this into an array.
      if (virtualInventory[virtualInventory.length - 2] !== 'inventory') { // We check if the effect contains the inventory pattern. Otherwise, we will add it below.
        virtualInventory.splice(virtualInventory.length - 1, 0, 'inventory'); // We put the 'inventory' keyword before the last match of the array.
        line = line.replace(/.*?(?<=with|named|to)/gim.exec(line)[0] || '', virtualInventory.join(' ')); // We join the all and replace it!
      }
      line = line.replace(ofExecutorRegex, '');
      line = line.replace(/open virtual/gim, 'create a gui with virtual') + ':';
      indentation = line.match(/\s+/g)[0];
      guiSection = true;
    } else if (/(make|format|create)( a)? gui slot/gim.test(line)) {
      line = line.replace(ofExecutorRegex, '');
      line = line.replace(/to (do)? nothing/gim, '');
      line = line.replace(/(make|format|create)( a)? gui slot/gim, 'make gui slot');
      if (/ (to )?(run|exec|execute) using /gim.test(line))
        line = line.replace(/ (to )?(run|exec|execute) using /gim, ':\n' + indentation + softIndent.repeat(2) + 'gui-click-type is ').slice(0, -1);
      if (/ (to )?(run|exec|execute)( function)? /gim.test(line)) {
        line = line.replace(/ (to )?(run|exec|execute)( function)? /gim, ':\n' + indentation + softIndent.repeat(2));
        line = line.replace(/,( )?/gm, '\n' + indentation + softIndent.repeat(2));
      }
      line = line.replace(/ (to )?(run|exec|execute):/gim, ':' + indentation + softIndent.repeat(2));
      line = line.replace(/ to close( then)?(:)?/gim, ':\n' + indentation + softIndent.repeat(2) + 'close ' + player[0] + '\'s inventory');
      line = line.replace(executorRegex, 'make $1 execute');
      line = softIndent + line;
    } else if (guiSection) {
      line = softIndent + line;
    }
    output.push(line);
  }
  return output.join('\n');
}
