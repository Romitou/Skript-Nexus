/**
 * Created by Romitou on 3/8/20.
 * Work in progress.
 */

async function parse() {
    const code = document.getElementById('input').value.split('\n');
    const isTab = document.getElementById('tabulations').checked;
    let output = [];
    let indentation = '';
    let guiSection = false;
    for (let line of code) {
        if (/open virtual/gim.test(line)) {
            line = line.replace(/ (of|to) (player|executor|victim|attacker|{.*?})/gim, '');
            line = line.replace(/open virtual/gim, 'create a gui with virtual') + ':';
            indentation = line.match(/\s+/g)[0];
            guiSection = true;
        } else if (/(make|format|create)( a)? gui slot/gim.test(line)) {
            line = line.replace(/ (of|to) (player|executor|victim|attacker|{.*?})/gim, '');
            line = line.replace(/(make|format|create)( a)? gui slot/gim, 'make gui slot');
            line = (isTab ? '\t' : '    ') + line;
        } else if (guiSection) {
            line = (isTab ? '\t' : '    ') + line;
        }
        output.push(line);
    }
    return output.join('\n');
}

async function convert() {
    const error = document.getElementById('error');
    const success = document.getElementById('success');
    error.hidden = true;
    success.hidden = true;
    try {
        document.getElementById('output').value = await parse();
        success.hidden = false;
    } catch (ignore) {
        console.log(ignore)
        error.hidden = false;
    }
}
