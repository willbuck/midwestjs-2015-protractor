## How do we mitigate this?

1. Isolate the 5-10 tests that cover critical paths

2. Take care to test only core things after they're stable 

note:
- Small number of tests so devs can have a reasonably fast feedback loop
- Can create suites if you still want heavier coverage
- Testing only core stable features after they've solidified means they are unlikely to break easily
- I'd recommend against TDD with E2E unless you've hardened a prototype of your user interaction pieces already