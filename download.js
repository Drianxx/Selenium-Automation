const download = require('image-downloader');

const options = {
  url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
  dest: 'C:\\Users\\Adrian\\Documents\\testselenium\\img',               // will be saved to /path/to/dest/image.jpg
};

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err));