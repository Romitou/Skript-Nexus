/**
 * @name parse
 * @description Analyze the code and transform it.
 * @async
 * @author Romitou
 */
async function parse() {
    const code = document.getElementById('input').value.split('\n');
    const softIndent = document.getElementById('tabulations').checked ? '\t' : '    ';

    let player = '';
    let output = [];
    let indentation = '';
    let guiSection = false;

    code.push(''); // Adding a new blank line to avoid errors with GUI section.
    for (let line of code) {
        if (!(line.startsWith(' ') || line.startsWith('\t')) && guiSection) {
            output.push(indentation + 'open last created gui to ' + player);
            guiSection = false;
        } else if (/open virtual/gim.test(line)) {
            player = /(player|executor|victim|attacker|{.*?})/gim.exec(line)[0];
            let virtualInventory = /.*?(?<= with| named| to)/gim.exec(line)[0]; // We retrieve only the interesting part.
            virtualInventory = virtualInventory.split(' '); // We split this into an array.
            if (virtualInventory[virtualInventory.length - 2] !== 'inventory') { // We check if the effect contains the inventory pattern. Otherwise, we will add it below.
                virtualInventory.splice(virtualInventory.length - 1, 0, 'inventory'); // We put the 'inventory' keyword before the last match of the array.
                line = line.replace(/.*?(?<=with|named|to)/gim.exec(line)[0] || '', virtualInventory.join(' ')); // We join the all and replace it!
            }
            line = line.replace(/ (of|to) (player|executor|victim|attacker|{.*?})/gim, '');
            line = line.replace(/open virtual/gim, 'create a gui with virtual') + ':';
            indentation = line.match(/\s+/g)[0];
            guiSection = true;
        } else if (/(make|format|create)( a)? gui slot/gim.test(line)) {
            line = line.replace(/ (of|to) (player|executor|victim|attacker|{.*?})/gim, '');
            line = line.replace(/to (do)? nothing/gim, '');
            line = line.replace(/(make|format|create)( a)? gui slot/gim, 'make gui slot');
            line = line.replace(/ (to )?(run|exec|execute) using /gim, ':\n' + indentation + softIndent.repeat(2) + 'gui-click-type is ').slice(0, -1);
            line = line.replace(/ (to )?(run|exec|execute)( function)? /gim, ':\n' + indentation + softIndent.repeat(2));
            line = line.replace(/ (to )?(run|exec|execute):/gim, ':' + indentation + softIndent.repeat(2));
            line = line.replace(/ to close( then)?(:)?/gim, ':\n' + indentation + softIndent.repeat(2) + 'close ' + player + '\'s inventory');
            const match = line.match(/(player|executor|victim|attacker|console|{.*?}) command/gim)
            if (match)
                match[0].split(' ').splice(1, 0, 'execute');
            line = line.replace(/(player|executor|victim|attacker|console|{.*?}) command/, 'make ' + match?.join(' '));
            line = softIndent + line;
        } else if (guiSection) {
            line = softIndent + line;
        }
        output.push(line);
    }
    return output.join('\n');
}

/**
 * @name convert
 * @description Converted the requested code using the parser function.
 * @see parse
 * @async
 * @author Romitou
 */
async function convert() {
    const error = document.getElementById('error');
    const success = document.getElementById('success');
    error.hidden = true;
    success.hidden = true;
    try {
        document.getElementById('output').value = await parse();
        success.hidden = false;
    } catch (err) {
        console.error(err);
        error.hidden = false;
    }
}
