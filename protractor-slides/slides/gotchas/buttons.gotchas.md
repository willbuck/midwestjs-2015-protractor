# Caution: by.buttonText is very choosy!

Try by.partialButtonText
```
this.importButton = element(by.partialButtonText('Import')); // Iffy
```
or by.binding to a function TODO does this work?
```
this.importButton = element(by.binding('Import'));
```

note:
- Pick a strategy and stick to it, be clear across your team