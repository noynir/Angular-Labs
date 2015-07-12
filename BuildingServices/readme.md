# Building Services

### Create an Angular application that will search stack overflow for questions.

1. create an input text element,input number element and input button element.
2. When clicking on the button you search stack overflow api for questions with the tag entered in the text element and display the number of questions enetred in the number element.
3. the list should display the questions title as link to the stackoverflow website and in a new line should display the username of the owner of the questions.
4. If There are more questions to display, create a link that will display append the next set of questions to the list.

![Angular Services](https://cloud.githubusercontent.com/assets/8056070/8639803/e6e17fc0-28ec-11e5-91fa-e2d4e4271362.png)


* Write a custom angular service that will search the questions from the stack overflow api
* You can use angular $http service or the $resource service.
* [stackoverflow api](https://api.stackexchange.com/docs/search#page=1&pagesize=10&order=desc&sort=activity&tagged=angularjs&filter=default&site=stackoverflow&run=true)
* sample request:
* `http://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&tagged=angularjs`
* sample response:
 ```javascript
 {
    "items": [
        {
            "tags": [
                "angularjs",
                "firebase",
                "google-oauth",
                "protractor"
            ],
            "owner": {
                "reputation": 76,
                "user_id": 4151025,
                "user_type": "registered",
                "profile_image": "https://lh6.googleusercontent.com/-s4D9NSQURcI/AAAAAAAAAAI/AAAAAAAAAHU/hed7RKxD71s/photo.jpg?sz=128",
                "display_name": "Abimbola Idowu",
                "link": "http://stackoverflow.com/users/4151025/abimbola-idowu"
            },
            "is_answered": true,
            "view_count": 12,
            "answer_count": 1,
            "score": 1,
            "last_activity_date": 1436718752,
            "creation_date": 1436716209,
            "last_edit_date": 1436718752,
            "question_id": 31369645,
            "link": "http://stackoverflow.com/questions/31369645/how-to-use-protractor-to-test-google-oauth",
            "title": "How to use protractor to test Google OAuth"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "css3",
                "angularjs-directive",
                "ionic-framework"
            ],
            "owner": {
                "reputation": 642,
                "user_id": 3701974,
                "user_type": "registered",
                "accept_rate": 55,
                "profile_image": "https://www.gravatar.com/avatar/69615a35d48f43e89cd5d39bb02862cd?s=128&d=identicon&r=PG",
                "display_name": "user944513",
                "link": "http://stackoverflow.com/users/3701974/user944513"
            },
            "is_answered": false,
            "view_count": 8,
            "answer_count": 1,
            "score": 0,
            "last_activity_date": 1436718684,
            "creation_date": 1436716271,
            "question_id": 31369652,
            "link": "http://stackoverflow.com/questions/31369652/how-to-make-dropdown-or-select-box-in-ionic",
            "title": "how to make dropdown or select box in ionic"
        },
        {
            "tags": [
                "angularjs",
                "angularjs-ng-repeat"
            ],
            "owner": {
                "reputation": 168,
                "user_id": 1691808,
                "user_type": "registered",
                "accept_rate": 64,
                "profile_image": "https://www.gravatar.com/avatar/b1360d104bad2ba6a2c754c933a24117?s=128&d=identicon&r=PG",
                "display_name": "user1691808",
                "link": "http://stackoverflow.com/users/1691808/user1691808"
            },
            "is_answered": false,
            "view_count": 8,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1436718475,
            "creation_date": 1436718475,
            "question_id": 31370005,
            "link": "http://stackoverflow.com/questions/31370005/ng-model-within-a-nested-ng-repeat",
            "title": "ng-model within a nested ng-repeat"
        },
        {
            "tags": [
                "angularjs",
                "testing",
                "protractor",
                "electron"
            ],
            "owner": {
                "reputation": 309,
                "user_id": 595130,
                "user_type": "registered",
                "accept_rate": 100,
                "profile_image": "https://www.gravatar.com/avatar/f73cfe18f681e315428da8e6f10652a8?s=128&d=identicon&r=PG",
                "display_name": "cha55son",
                "link": "http://stackoverflow.com/users/595130/cha55son"
            },
            "is_answered": true,
            "view_count": 34,
            "accepted_answer_id": 31341341,
            "answer_count": 1,
            "score": 2,
            "last_activity_date": 1436718426,
            "creation_date": 1436480878,
            "question_id": 31329361,
            "link": "http://stackoverflow.com/questions/31329361/electron-app-with-protractor-end-to-end-testing",
            "title": "Electron app with protractor end-to-end testing"
        },
        {
            "tags": [
                "ajax",
                "angularjs",
                "seo"
            ],
            "owner": {
                "reputation": 68,
                "user_id": 1933098,
                "user_type": "registered",
                "accept_rate": 73,
                "profile_image": "https://www.gravatar.com/avatar/8ed70e62b377355f8c9e03e0e397e6d3?s=128&d=identicon&r=PG",
                "display_name": "Kristof",
                "link": "http://stackoverflow.com/users/1933098/kristof"
            },
            "is_answered": false,
            "view_count": 6,
            "answer_count": 0,
            "score": -2,
            "last_activity_date": 1436718288,
            "creation_date": 1436718288,
            "question_id": 31369976,
            "link": "http://stackoverflow.com/questions/31369976/will-google-seo-still-work-when-blogs-content-is-picked-up-by-ajax-from-subdoma",
            "title": "Will google SEO still work when Blog&#39;s content is picked up by AJAX from subdomain?"
        },
        {
            "tags": [
                "javascript",
                "json",
                "angularjs",
                "http",
                "factory-pattern"
            ],
            "owner": {
                "reputation": 1,
                "user_id": 5081053,
                "user_type": "registered",
                "profile_image": "http://i.stack.imgur.com/FgvcY.jpg?s=128&g=1",
                "display_name": "Jaro",
                "link": "http://stackoverflow.com/users/5081053/jaro"
            },
            "is_answered": false,
            "view_count": 33,
            "answer_count": 2,
            "score": 0,
            "last_activity_date": 1436717427,
            "creation_date": 1436713855,
            "question_id": 31369260,
            "link": "http://stackoverflow.com/questions/31369260/angularjs-http-get-json-fron-server",
            "title": "Angularjs $http.get(). JSON fron server"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "security",
                "xss",
                "token"
            ],
            "owner": {
                "reputation": 1,
                "user_id": 5108262,
                "user_type": "registered",
                "profile_image": "http://i.stack.imgur.com/pKqBN.jpg?s=128&g=1",
                "display_name": "Rob Laverty",
                "link": "http://stackoverflow.com/users/5108262/rob-laverty"
            },
            "is_answered": true,
            "view_count": 18,
            "answer_count": 2,
            "score": 0,
            "last_activity_date": 1436717375,
            "creation_date": 1436716351,
            "question_id": 31369666,
            "link": "http://stackoverflow.com/questions/31369666/angularjs-how-to-make-a-token-inaccessible-from-console-or-malicious-attacks",
            "title": "AngularJS - How to make a token inaccessible from console or malicious attacks?"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "vis"
            ],
            "owner": {
                "reputation": 451,
                "user_id": 1831775,
                "user_type": "registered",
                "accept_rate": 85,
                "profile_image": "https://www.gravatar.com/avatar/06276b7ebc62c6601c36dba2543ad0cf?s=128&d=identicon&r=PG",
                "display_name": "chriskelly",
                "link": "http://stackoverflow.com/users/1831775/chriskelly"
            },
            "is_answered": false,
            "view_count": 9,
            "answer_count": 0,
            "score": 2,
            "last_activity_date": 1436717322,
            "creation_date": 1436717322,
            "question_id": 31369811,
            "link": "http://stackoverflow.com/questions/31369811/visjs-timeline-disappears-after-angular-route-reload",
            "title": "visjs timeline disappears after angular route reload"
        },
        {
            "tags": [
                "ajax",
                "json",
                "angularjs"
            ],
            "owner": {
                "reputation": 6,
                "user_id": 1744997,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/d5e68e6e10c840c31b198a58cc7368b8?s=128&d=identicon&r=PG",
                "display_name": "jolofj",
                "link": "http://stackoverflow.com/users/1744997/jolofj"
            },
            "is_answered": false,
            "view_count": 23,
            "answer_count": 2,
            "score": 0,
            "last_activity_date": 1436716806,
            "creation_date": 1436448267,
            "last_edit_date": 1436448413,
            "question_id": 31318857,
            "link": "http://stackoverflow.com/questions/31318857/ajax-json-problems-with-ngrepeat",
            "title": "AJAX (JSON) problems with NGRepeat"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "date",
                "filter"
            ],
            "owner": {
                "reputation": 681,
                "user_id": 1165009,
                "user_type": "registered",
                "accept_rate": 53,
                "profile_image": "https://www.gravatar.com/avatar/fc3d76a937ca9173d5ca4aa6d4b73937?s=128&d=identicon&r=PG&f=1",
                "display_name": "Sami",
                "link": "http://stackoverflow.com/users/1165009/sami"
            },
            "is_answered": false,
            "view_count": 18,
            "answer_count": 1,
            "score": 1,
            "last_activity_date": 1436716596,
            "creation_date": 1436714787,
            "last_edit_date": 1436715644,
            "question_id": 31369402,
            "link": "http://stackoverflow.com/questions/31369402/how-to-auto-select-date-in-angularjs",
            "title": "How to auto select date in AngularJS"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "zurb-foundation"
            ],
            "owner": {
                "reputation": 66,
                "user_id": 2933134,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/23f46725ff0fa9bd76b658ce588d9a34?s=128&d=identicon&r=PG&f=1",
                "display_name": "Halogen",
                "link": "http://stackoverflow.com/users/2933134/halogen"
            },
            "is_answered": true,
            "view_count": 39,
            "accepted_answer_id": 31369651,
            "answer_count": 1,
            "score": 1,
            "last_activity_date": 1436716268,
            "creation_date": 1435270759,
            "question_id": 31061788,
            "link": "http://stackoverflow.com/questions/31061788/access-to-zurb-foundation-for-apps-modules-in-angularjs-app",
            "title": "Access to Zurb Foundation for Apps modules in AngularJS App"
        },
        {
            "tags": [
                "angularjs",
                "unit-testing",
                "jasmine",
                "karma-runner",
                "ecmascript-6"
            ],
            "owner": {
                "reputation": 13,
                "user_id": 4647818,
                "user_type": "registered",
                "profile_image": "https://lh3.googleusercontent.com/-o4L1a9DMR40/AAAAAAAAAAI/AAAAAAAATIs/Q2UCyg9W1tM/photo.jpg?sz=128",
                "display_name": "datatype_void",
                "link": "http://stackoverflow.com/users/4647818/datatype-void"
            },
            "is_answered": true,
            "view_count": 8,
            "accepted_answer_id": 31368558,
            "answer_count": 2,
            "score": 0,
            "last_activity_date": 1436716215,
            "creation_date": 1436663472,
            "last_edit_date": 1436708625,
            "question_id": 31363400,
            "link": "http://stackoverflow.com/questions/31363400/problems-unit-testing-es6-angular-directive-controlleras-with-karma-jasmine",
            "title": "Problems Unit Testing ES6 Angular Directive ControllerAs with Karma/Jasmine"
        },
        {
            "tags": [
                "javascript",
                "arrays",
                "json",
                "angularjs",
                "object"
            ],
            "owner": {
                "reputation": 322,
                "user_id": 1577357,
                "user_type": "registered",
                "accept_rate": 41,
                "profile_image": "https://www.gravatar.com/avatar/9db0054df76cc4b80888ff713527a652?s=128&d=identicon&r=PG",
                "display_name": "zulhfreelancer",
                "link": "http://stackoverflow.com/users/1577357/zulhfreelancer"
            },
            "is_answered": true,
            "view_count": 51,
            "answer_count": 4,
            "score": 1,
            "last_activity_date": 1436715928,
            "creation_date": 1436664104,
            "last_edit_date": 1436669124,
            "question_id": 31363458,
            "link": "http://stackoverflow.com/questions/31363458/how-to-ng-repeat-array-of-an-object-in-object",
            "title": "How to ng-repeat array of an object in object?"
        },
        {
            "tags": [
                "angularjs",
                "authentication",
                "firebase"
            ],
            "owner": {
                "reputation": 609,
                "user_id": 1402121,
                "user_type": "registered",
                "accept_rate": 67,
                "profile_image": "https://www.gravatar.com/avatar/d3981596b0874b99560badf18af18525?s=128&d=identicon&r=PG",
                "display_name": "dmo",
                "link": "http://stackoverflow.com/users/1402121/dmo"
            },
            "is_answered": false,
            "view_count": 20,
            "bounty_amount": 50,
            "bounty_closes_date": 1437320480,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1436715680,
            "creation_date": 1436472919,
            "last_edit_date": 1436535379,
            "question_id": 31327352,
            "link": "http://stackoverflow.com/questions/31327352/firebase-auth-not-updating-once-password-reset",
            "title": "Firebase Auth not updating once password reset"
        },
        {
            "tags": [
                "javascript",
                "angularjs"
            ],
            "owner": {
                "reputation": 361,
                "user_id": 1281127,
                "user_type": "registered",
                "accept_rate": 14,
                "profile_image": "https://www.gravatar.com/avatar/6f53189e0d025336ff6f3a01907d640c?s=128&d=identicon&r=PG",
                "display_name": "Nolan Knill",
                "link": "http://stackoverflow.com/users/1281127/nolan-knill"
            },
            "is_answered": false,
            "view_count": 31,
            "answer_count": 1,
            "score": 4,
            "last_activity_date": 1436715637,
            "creation_date": 1436363954,
            "question_id": 31294981,
            "link": "http://stackoverflow.com/questions/31294981/removing-ngrepeat-item-from-rootscope-array-doesnt-instantly-remove-the-item-f",
            "title": "Removing ngRepeat item from $rootScope array doesn&#39;t instantly remove the item from html"
        },
        {
            "tags": [
                "angularjs",
                "zurb-foundation"
            ],
            "owner": {
                "reputation": 1111,
                "user_id": 287343,
                "user_type": "registered",
                "accept_rate": 96,
                "profile_image": "http://i.stack.imgur.com/s9NEJ.jpg?s=128&g=1",
                "display_name": "Jay Haase",
                "link": "http://stackoverflow.com/users/287343/jay-haase"
            },
            "is_answered": false,
            "view_count": 17,
            "answer_count": 1,
            "score": 0,
            "last_activity_date": 1436714835,
            "creation_date": 1436596898,
            "question_id": 31354267,
            "link": "http://stackoverflow.com/questions/31354267/dynamic-top-bar-text-based-on-current-page-in-zurb-foundation-for-apps-app",
            "title": "Dynamic Top Bar Text Based on Current Page in Zurb Foundation for Apps App"
        },
        {
            "tags": [
                "angularjs",
                "dynatree"
            ],
            "owner": {
                "reputation": 932,
                "user_id": 3306192,
                "user_type": "registered",
                "accept_rate": 0,
                "profile_image": "https://www.gravatar.com/avatar/41a810eb3dde5188b0f9ec725106a025?s=128&d=identicon&r=PG&f=1",
                "display_name": "RahulB",
                "link": "http://stackoverflow.com/users/3306192/rahulb"
            },
            "is_answered": false,
            "view_count": 4,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1436714738,
            "creation_date": 1436714738,
            "question_id": 31369398,
            "link": "http://stackoverflow.com/questions/31369398/create-dynatree-with-selected-nodes-of-another-dynatree",
            "title": "Create dynatree with selected nodes of another dynatree"
        },
        {
            "tags": [
                "asp.net-mvc",
                "angularjs",
                "authorization"
            ],
            "owner": {
                "reputation": 48,
                "user_id": 2191662,
                "user_type": "registered",
                "accept_rate": 100,
                "profile_image": "https://www.gravatar.com/avatar/8f9d5accdd2397906a8461efdd473b14?s=128&d=identicon&r=PG",
                "display_name": "Adam Wilson",
                "link": "http://stackoverflow.com/users/2191662/adam-wilson"
            },
            "is_answered": true,
            "view_count": 92,
            "accepted_answer_id": 29098399,
            "answer_count": 2,
            "score": 0,
            "last_activity_date": 1436714488,
            "creation_date": 1426590045,
            "question_id": 29097397,
            "link": "http://stackoverflow.com/questions/29097397/asp-net-mvc-and-angularjs-authorization",
            "title": "ASP.NET MVC and AngularJS authorization"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "angular-promise"
            ],
            "owner": {
                "reputation": 745,
                "user_id": 1503710,
                "user_type": "registered",
                "accept_rate": 48,
                "profile_image": "https://www.gravatar.com/avatar/ecef4c77042082dc6d57e929e8e78571?s=128&d=identicon&r=PG",
                "display_name": "NiRR",
                "link": "http://stackoverflow.com/users/1503710/nirr"
            },
            "is_answered": false,
            "view_count": 41,
            "answer_count": 1,
            "score": 3,
            "last_activity_date": 1436714379,
            "creation_date": 1436692729,
            "last_edit_date": 1436714379,
            "question_id": 31366219,
            "link": "http://stackoverflow.com/questions/31366219/angular-reload-an-existing-promise",
            "title": "angular reload an existing promise"
        },
        {
            "tags": [
                "javascript",
                "angularjs"
            ],
            "owner": {
                "reputation": 48,
                "user_id": 1943259,
                "user_type": "registered",
                "accept_rate": 50,
                "profile_image": "https://www.gravatar.com/avatar/1af1628114331fb03abdf0f372f32e1e?s=128&d=identicon&r=PG&f=1",
                "display_name": "Vaskar Ray Karmakar",
                "link": "http://stackoverflow.com/users/1943259/vaskar-ray-karmakar"
            },
            "is_answered": true,
            "view_count": 21,
            "answer_count": 1,
            "score": -1,
            "last_activity_date": 1436714300,
            "creation_date": 1436713913,
            "last_edit_date": 1436713997,
            "question_id": 31369269,
            "link": "http://stackoverflow.com/questions/31369269/not-able-to-call-angular-service-from-controller",
            "title": "Not able to call angular service from controller"
        },
        {
            "tags": [
                "javascript",
                "html",
                "css",
                "angularjs"
            ],
            "owner": {
                "reputation": 6,
                "user_id": 2530459,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/cfab907f21b7fbe709d50f06cd7917c4?s=128&d=identicon&r=PG",
                "display_name": "Kaspars Bergs",
                "link": "http://stackoverflow.com/users/2530459/kaspars-bergs"
            },
            "is_answered": true,
            "view_count": 26,
            "closed_date": 1436717755,
            "accepted_answer_id": 31364521,
            "answer_count": 1,
            "score": -3,
            "last_activity_date": 1436714043,
            "creation_date": 1436669457,
            "last_edit_date": 1436714043,
            "question_id": 31363913,
            "link": "http://stackoverflow.com/questions/31363913/angular-js-ng-click-not-running-without-firing-on-2nd-click-js-bin",
            "closed_reason": "off-topic",
            "title": "Angular.js ng-click not running without {{...}} firing on 2nd click (JS Bin)"
        },
        {
            "tags": [
                "angularjs",
                "node.js",
                "express",
                "paypal",
                "paypal-subscriptions"
            ],
            "owner": {
                "reputation": 1276,
                "user_id": 751223,
                "user_type": "registered",
                "accept_rate": 57,
                "profile_image": "https://www.gravatar.com/avatar/dac2b5a99e041f51420dbf2ade0dbd66?s=128&d=identicon&r=PG",
                "display_name": "dark_shadow",
                "link": "http://stackoverflow.com/users/751223/dark-shadow"
            },
            "is_answered": false,
            "view_count": 7,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1436713047,
            "creation_date": 1436713047,
            "question_id": 31369140,
            "link": "http://stackoverflow.com/questions/31369140/integrating-paypal-api-for-recurring-payments",
            "title": "Integrating PayPal API for recurring payments"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "express",
                "angular-ui-router",
                "angularjs-ui-router"
            ],
            "owner": {
                "reputation": 1276,
                "user_id": 751223,
                "user_type": "registered",
                "accept_rate": 57,
                "profile_image": "https://www.gravatar.com/avatar/dac2b5a99e041f51420dbf2ade0dbd66?s=128&d=identicon&r=PG",
                "display_name": "dark_shadow",
                "link": "http://stackoverflow.com/users/751223/dark-shadow"
            },
            "is_answered": false,
            "view_count": 36,
            "answer_count": 2,
            "score": 1,
            "last_activity_date": 1436712766,
            "creation_date": 1436708161,
            "last_edit_date": 1436708589,
            "question_id": 31368338,
            "link": "http://stackoverflow.com/questions/31368338/event-preventdefault-not-waiting-till-promise-is-resolved",
            "title": "event.preventDefault() not waiting till promise is resolved"
        },
        {
            "tags": [
                "angularjs",
                "ng-dialog"
            ],
            "owner": {
                "reputation": 103,
                "user_id": 2387834,
                "user_type": "registered",
                "accept_rate": 76,
                "profile_image": "http://i.stack.imgur.com/IYQeW.jpg?s=128&g=1",
                "display_name": "sisimh",
                "link": "http://stackoverflow.com/users/2387834/sisimh"
            },
            "is_answered": false,
            "view_count": 18,
            "answer_count": 1,
            "score": 1,
            "last_activity_date": 1436712683,
            "creation_date": 1436709255,
            "last_edit_date": 1436712683,
            "question_id": 31368510,
            "link": "http://stackoverflow.com/questions/31368510/angularjs-ngdialog-error",
            "title": "AngularJS ngDialog error"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "lodash"
            ],
            "owner": {
                "reputation": 806,
                "user_id": 1029808,
                "user_type": "registered",
                "accept_rate": 67,
                "profile_image": "https://www.gravatar.com/avatar/b29446c389018572967bb14807d2f6ff?s=128&d=identicon&r=PG",
                "display_name": "brotherofmysister",
                "link": "http://stackoverflow.com/users/1029808/brotherofmysister"
            },
            "is_answered": false,
            "view_count": 48,
            "answer_count": 1,
            "score": 1,
            "last_activity_date": 1436712591,
            "creation_date": 1436680569,
            "last_edit_date": 1436689415,
            "question_id": 31364845,
            "link": "http://stackoverflow.com/questions/31364845/how-to-pass-multiple-http-promise-under-q",
            "title": "How to pass multiple $http promise under $q"
        },
        {
            "tags": [
                "javascript",
                "angularjs"
            ],
            "owner": {
                "reputation": 2366,
                "user_id": 16631,
                "user_type": "registered",
                "accept_rate": 86,
                "profile_image": "https://www.gravatar.com/avatar/b0bdc37fe19d0bb93a60b98a0c0624e0?s=128&d=identicon&r=PG",
                "display_name": "Organiccat",
                "link": "http://stackoverflow.com/users/16631/organiccat"
            },
            "is_answered": false,
            "view_count": 22,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1436712474,
            "creation_date": 1436645064,
            "last_edit_date": 1436712474,
            "question_id": 31361300,
            "link": "http://stackoverflow.com/questions/31361300/fire-event-on-slick-next-arrow-click-in-angular-dynamic-loading",
            "title": "Fire event on slick next arrow click in angular, dynamic loading"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "validation"
            ],
            "owner": {
                "reputation": 176,
                "user_id": 2229234,
                "user_type": "registered",
                "accept_rate": 35,
                "profile_image": "https://www.gravatar.com/avatar/d6f057a3d61e8aba4e42a7d86550b5b8?s=128&d=identicon&r=PG",
                "display_name": "Kamil Milka Janowski",
                "link": "http://stackoverflow.com/users/2229234/kamil-milka-janowski"
            },
            "is_answered": true,
            "view_count": 15,
            "accepted_answer_id": 31369043,
            "answer_count": 1,
            "score": 0,
            "last_activity_date": 1436712427,
            "creation_date": 1436712126,
            "question_id": 31368991,
            "link": "http://stackoverflow.com/questions/31368991/custom-validation-with-angularjs-isnt-triggered",
            "title": "Custom validation with AngularJS isn&#39;t triggered"
        },
        {
            "tags": [
                "javascript",
                "jquery",
                "angularjs",
                "devexpress",
                "devextreme"
            ],
            "owner": {
                "reputation": 4598,
                "user_id": 118584,
                "user_type": "registered",
                "accept_rate": 68,
                "profile_image": "https://www.gravatar.com/avatar/89d52b51651acec30d586289a917c523?s=128&d=identicon&r=PG",
                "display_name": "Kris-I",
                "link": "http://stackoverflow.com/users/118584/kris-i"
            },
            "is_answered": false,
            "view_count": 15,
            "answer_count": 1,
            "score": 0,
            "last_activity_date": 1436712372,
            "creation_date": 1436711654,
            "question_id": 31368892,
            "link": "http://stackoverflow.com/questions/31368892/error-when-assign-controller-to-div",
            "title": "Error when assign controller to div"
        },
        {
            "tags": [
                "javascript",
                "angularjs",
                "kendo-ui",
                "telerik"
            ],
            "owner": {
                "reputation": 4166,
                "user_id": 155666,
                "user_type": "registered",
                "accept_rate": 81,
                "profile_image": "https://www.gravatar.com/avatar/caedc790beb8248f0a636970c656ce72?s=128&d=identicon&r=PG",
                "display_name": "Denis Biondic",
                "link": "http://stackoverflow.com/users/155666/denis-biondic"
            },
            "is_answered": false,
            "view_count": 10,
            "answer_count": 0,
            "score": 1,
            "last_activity_date": 1436712324,
            "creation_date": 1436712324,
            "question_id": 31369025,
            "link": "http://stackoverflow.com/questions/31369025/kendo-ui-angularjs-how-to-update-k-ng-model-a-k-a-two-way-binding-like-wi",
            "title": "Kendo UI &amp; AngularJS -&gt; How to update k-ng-model (a.k.a. two-way binding like with ng-model)"
        },
        {
            "tags": [
                "angularjs",
                "go"
            ],
            "owner": {
                "reputation": 177,
                "user_id": 3759007,
                "user_type": "registered",
                "accept_rate": 70,
                "profile_image": "https://www.gravatar.com/avatar/7e4b340203ea76ae1e9e1110fce0b343?s=128&d=identicon&r=PG&f=1",
                "display_name": "Alex",
                "link": "http://stackoverflow.com/users/3759007/alex"
            },
            "is_answered": false,
            "view_count": 9,
            "answer_count": 0,
            "score": -1,
            "last_activity_date": 1436712257,
            "creation_date": 1436711958,
            "last_edit_date": 1436712257,
            "question_id": 31368943,
            "link": "http://stackoverflow.com/questions/31368943/how-can-i-configure-my-go-server-to-work-with-angularjs-html5mode",
            "title": "How can I configure my go server to work with AngularJS html5mode?"
        }
    ],
    "has_more": true,
    "quota_max": 300,
    "quota_remaining": 286
}
 
 ```

