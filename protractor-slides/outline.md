##  outline

- Intro: Origin of the talk
	- Hadn't written protractor test prior to June
	- Wanted to instill confidence in others to give talks
	- Develop in the open
	- Dare yourself to learn and share what you find with the community
- Short prezz demonstrating merits (http://ramonvictor.github.io/protractor/slides/)
	- What it can do
	- Why do it		
	- Rather than talk a lot, would rather demo so... on to the code!

- Demo a non-angular site (MidwestJS?)
	- Measure angles between elements (maybe on different screen sizes?)
	- Touch on points that gave me struggle:
		- Most everything returns promises, some resolve "in time" seemingly while others must use callbacks for expectations...
		- What to put in a page object can be a tough choice
		- Naming things is hard
- Demo an angular one (should I make it? Prize-o-tron?)
	- YES
	- Directive
	- Animation
	- Route Change
	- Form
	- Have some element be a protractor (literally)
		- SVG? 
			- http://www.clker.com/cliparts/s/2/j/t/s/L/protractor.svg
			- http://commons.wikimedia.org/wiki/File:Protractor1.svg
		- http://crudbetter.com/test-angularjs-svg-directive/
		- Bottom nav? Follows the scroll? That'd be wicked cool
		- Or perhaps an overlay for images, click and it shows an angle
- Demo benchpress
	- https://github.com/angular/angular/blob/master/modules/benchpress/docs/index.md
	- Sounds like good for higher level benchmarks, avoids 'micro-benchmark'ing

- Wrap-up
	- Address CI / slowness story
		- CI Challenges
			- Webdriver server?
			- Data cleanup?
			- Install node in user land! (permission issues suck)
	- Good use cases
		- Smoke test of builds
		- Short tests that assert various integration points (DB, third party apps) are connected
			- These are easy things to miss so great to have an automated check!
		- In some cases, data creation! 
			- If your UI is the only simple way to create the complex data your app requires, that's a smell
			- But if you can automate that, voila! Easy to create test users

note:
    
