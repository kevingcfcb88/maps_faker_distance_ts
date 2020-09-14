//import { User } from './User';
//import { Company } from './Company';
import { Loader, LoaderOptions } from 'google-maps';

const options: LoaderOptions = {};
const loader = new Loader('AIzaSyBqnXHAWC4RbssnZzktoyxwtnlPXnK6HsU', options);

loader.load().then(function (google) {
  console.log(google);
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 100,
  });
});
