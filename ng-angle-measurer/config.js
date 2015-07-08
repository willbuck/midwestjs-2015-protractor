System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "paths": {
    "github:*": "jspm_packages/github/*"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.2",
    "typescript": "github:mhegazy/typescript@v1.5-beta2"
  }
});

