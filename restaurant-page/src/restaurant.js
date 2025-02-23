

const createRestaurantHomePage = () => {
const content = document.querySelector(".main");
content.innerHTML = `<h1 class="heading">Lorem Restaurant</h1>
<p class="desc">
        This Restaurant is Lorem Restaurant amet consectetur adipisicing elit. Animi fuga
        natus nostrum ut porro maxime tempora ipsam neque possimus voluptatibus?
        Lorem ipsum dolor sit amet.
      </p>

      <div class="timings">
        <div class="timing-head">Timings</div>
        <span>Monday : 8am - 8pm</span>
        <span>Tuesday : 8am - 8pm</span>
        <span>Wednesday : 8am - 8pm</span>
        <span>Thursday : 8am - 8pm</span>
        <span>Friday : 8am - 8pm</span>
        <span>Saturday : 8am - 10pm</span>
        <span>Sunday: 8am - 10pm</span>
      </div>

      <div class="location">
        <div class="location-heading">Location</div>
        123 Forest Drive, Forestville, Maine
      </div>`;
}

export default createRestaurantHomePage;