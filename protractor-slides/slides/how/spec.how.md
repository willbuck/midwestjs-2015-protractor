## A Spec(ification) of what we're testing
How the page should behave

```
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
  });
});
```

note:
- Comment on default anatomy here: jasmine desc/it/expect, protractor element/by
- Default is Jasmine but Mocha/Chai, Cucumber, etc also options