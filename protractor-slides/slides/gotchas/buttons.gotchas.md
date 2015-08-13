## Caution: by.buttonText is very choosy!

Try by.partialButtonText
```
this.importButton = element(by.partialButtonText('Import')); // Iffy
```
or by.css with the ng-click attribute
```
this.importButton = element(by.css('[ng-click="importNames()"]'))
// note that it might be data-ng-click
```

note:
- Pick a strategy and stick to it, be clear across your team
- Prefer the users perspective (text) or prgrammers (ng-click)