# This is Property

### Prerequisites

* [Git](https://git-scm.com/downloads) - Source control.
* [SourceTree](https://www.sourcetreeapp.com/) - A gui for Git (A lot more user friendly than your command line).
* [Node.js](https://nodejs.org/) - Javascript runtime.
* [NPM](https://www.npmjs.com/get-npm) - Javascript package manager.
* [Meteor](https://www.meteor.com/) - The framework used to build the site.

##

### Setup instructions

Install all of the above and read the documentation they offer to get familliar with them.

* Create a github account: https://github.com/
* Clone all the [files](https://github.com/ashmore11/property-app) locally on your computer using source tree.
* Using source tree, create a new branch (Search the [SourceTree documentation](https://confluence.atlassian.com/get-started-with-sourcetree?_ga=2.131188687.1985036612.1498485832-174749162.1498485832) for steps to doing this)
* Once you have the files on you computer, navigate to the root folder of the project using your command line.
* Run the command: ```meteor npm install```
* Once all the files have been downloaded you can then run ```meteor```
* This will build the project and serve it locally for you.
* Navigate to http://localhost:3000 in chrome to preview the site.
* Any updates you make to the code will be automatically compiled and your browser will refresh automatically.
* Once you have made some changes and would like to push the to the repo, create a pull request to the develop branch and add me as a reviewer.
* Again you can find instructions for the above in either the SourceTree or Git docs.

##

### Files
All the frontend files are located in the ```client``` folder. <br>
All the css files live in the ```client/styles``` folder. I am using [scss](http://sass-lang.com/). It's basically just plain old cms but with many extra features.