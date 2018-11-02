# reactEmbed

An node project using webpack and babel to convert a react component to a js file that can be consumed by non-react websites.

This is a very simple example of how this embed functionality works. Here we are pulling approved user generated posts from our UGC Admin Board's external endpoint located at https://ugc-admin-board.herokuapp.com/external and rendering the content directly, not using Instagram or Twitter's API.

### Usage

1. Clone the repo
2. Run ```npm install```
3. Run ```npm run bundle-js```
4. Edit the hashtag you want to follow. This is the first parameter in the ```OceanWiseUGC()``` function
5. Edit the ```globalStyle```, ```lgMax```, and ```xsMax``` variables in the ```initialise()``` call within ```index.html```. ```lgMax``` adds styles when window width < 1730; ```xsMax``` adds styles when window width < 768. You can use these variables to set global styles. Individual styles can be applied with Styled-Component files imported into the main `index.js` file.
6. Run the example  ```npm run example```. There will now be a server running at ```http://localhost:3050```

Step 3 will generate two files in the build folder. A oceanWiseUGC.js and oceanWiseUGC-min.js.

See [index.html](https://github.com/edinnen/reactEmbed/blob/master/index.html) for an example how these files are consumed.

### Adapting for a different component

1. Replace references to SocialBox and change the method name in wrapper.js
2. Update method name and the output file names in the two webpack config files.
3. Update index.html
3. Run the usage steps.
