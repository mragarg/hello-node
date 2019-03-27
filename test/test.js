// const assert = require('assert');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/user');
const Restaurant = require('../models/restaurants');
const Review = require('../models/reviews');

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

// // REVIEWS TESTS
// describe('Review model', () => {
    
//     // Grabs an array of reviews
//     it('should be able to grab an array of reviews', async () => {
//         const arrayOfReviews = await Review.getAllReviews();
//         expect(arrayOfReviews).to.be.instanceOf(Array);
//     });
// });

// REVIEWS TESTS EXAMPLE
describe('Review model', () => {
    // Can I get one review?
    it('should be able to retrieve a review by id', async () => {
        // hopes and dreams
        const thatReview = await Review.getById(2);
        expect(thatReview).to.be.an.instanceOf(Review);
    });

    // Can I get all reviews?
    it('should be able to retrieve all reviews', async () => {
        const aBunchOfReviews = await Review.getAll();
        expect(aBunchOfReviews).to.be.an.instanceOf(Array);
        // and make sure each of them is an array
        // Use a plain for loop, so that the exception does not get
        // swallowed by a .forEach callback.
        for(let i = 0; i < aBunchOfReviews; i++){
            expect(aBunchOfReviews[i]).to.be.an.instanceOf(Review);
        }
    });
});

describe('Users and Reviews', () => {
    // Can I get a review by user?
    it('A user instance should be able to retrieve all their reviews', async () => {
        // grab a user by id
        // then get all their reviews
        // confirm that their reviews are in an array
        // and that the array is the correct length
        // and that each one is an instance of Review
    });
});