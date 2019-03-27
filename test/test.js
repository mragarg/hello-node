const User = require('../models/user');
const Restaurant = require('../models/restaurants');
const Review = require('../models/reviews');

// const assert = require('assert');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

// describe('Sanity check', function () {
//     it('should be 2', function () {
//         // assert.equal(2, 1 + 1);
//         expect(1 + 1).to.equal(2);
//     });
// });


// USERS TEST
describe('Users model', () => {

    // 😃 PATH (happy)
    it('should be able to retreieve by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
        // theUser.should.have.length(1);
    })

    // 😞 PATH (sad)
    it('should be able to retreieve by id', async () => {
        const theUser = await User.getById(276345);
        expect(theUser).to.be.null;
        // theUser.should.be.an.instanceOf(User);
        // theUser.should.have.length(1);
    })

    // Updates user's email
    it('should update the user', async () => {
        // grab a user with id 2
        const theUser = await User.getById(2);
        // update the email
        theUser.email = 'new@new.com';
        // save the user
        theUser.save()
            .then(async (report) => {
                // console.log(report);
                // re-grab the user with id 2
                const alsoTheUser = await User.getById(2);
                // expect the email = to the new value
                expect(alsoTheUser.email).to.equal('new@new.com');
            });
    });
});

// RESTAURANT TESTS
describe('Restaurant model', () => { 

    // Grabs an array of restaurants
    it('should be able to grab an array of restaurants', async () => {
        const arrayOfRestaurants = await Restaurant.getAll();
        expect(arrayOfRestaurants).to.be.instanceOf(Array);
    });
});

// REVIEWS TESTS
describe('Review model', () => {
    
    // Grabs an array of reviews
    it('should be able to grab an array of reviews', async () => {
        const arrayOfReviews = await Review.getAllReviews();
        expect(arrayOfReviews).to.be.instanceOf(Array);
    });
});