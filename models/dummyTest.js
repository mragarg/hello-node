const Restaurant = require('./restaurants');

async function stupid() {
    console.log(await Restaurant.getAll());
}

stupid();