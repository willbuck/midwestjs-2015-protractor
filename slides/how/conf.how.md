## A Configuration

protractor.conf.js
```
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};
```

note:
- Tons of options here, be sure to check the docs (which browsers to run, preparation functions, etc)