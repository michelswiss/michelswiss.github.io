import faker from './faker';
import uuid from 'uuid/dist/v4';

function generateTask(sortId) {
    let fakeResult = [];
    for(let task = 0; task < faker.random.number(40); task++) {
        let sort = task % 3 ? sortId : uuid();
        function setFile() {
            if (sort === sortId) {
                return faker.random.number(10) < faker.random.number(10)
            }
        }
        fakeResult.push({
            id: sort,
            file: setFile(),
            text: faker.lorem.text().length >= 1 ? faket.lorem.text() : "Ok. please wait!",
            date: new Date()
        });
    }
    return fakeResult;
}

function createFakeUser(count) {
    let users = [];
    for (let fake = 0; fake <= count; fake++) {
        let userId = uuid();
        users.push({
            name: faker.name.findName(),
            phoneNumber: faker.phone.phoneNumberFormat(5),
            rating: Math.random() * 100,
            notification: faker.random.number(10),
            id: userId,
            profile: faker.image.image(),
            tasks: [
                {
                    number: "1",
                    id: uuid(),
                    exercise: "Create Login Page with Material UI Components",
                    completed: false,
                    rating: 2.5,
                    messages: generateTask(userId)
                },
                {
                    number: "2",
                    id: uuid(),
                    exercise: "Create Login Page with Material UI Components",
                    completed: true,
                    rating: 2.5,
                    messages: generateTask(userId)
                },
                {
                    number: "3",
                    id: uuid(),
                    exercise: "Create Login Page with Material UI Components",
                    completed: true,
                    rating: 2.5,
                    messages: generateTask(userId)
                },
                {
                    number: "4",
                    id: uuid(),
                    exercise: "Create Login Page with Material UI Components",
                    completed: false,
                    rating: 2.5,
                    messages: generateTask(userId)
                }
            ],
            support: userId % 3 ? generateTask(userId) : false
            /* tasks: [
                {
                    number: "5",
                    id: uuid(),
                    exercise: "Create Login Page with Material UI Components",
                    completed: false,
                    rating: 0,
                    messages: [
                        {
                            id: userId,
                            text: "Hello techer."
                        },
                        {
                            id: uuid(),
                            text: "Hi?!"
                        },
                        {
                            id: userId,
                            text: "How are you today? :)"
                        },
                        {
                            id: uuid(),
                            text: "Not bad, thanks. How are you?"
                        },
                        {
                            id: uuid(),
                            text: "Show me your homework. Quick 😡!!!"
                        },
                        {
                            id: userId,
                            text: "Homework? 😲"
                        }
                    ]
                }
            ] */
        });
    }
    return users;
}

//const base = createFakeUser(10);
var base;
const localStrage = window.localStorage.getItem('users');
if(localStrage) {
    let localBase = window.localStorage.getItem('users');
    base = JSON.parse(localBase);
} else {
    base = createFakeUser(11);
    window.localStorage.setItem('users', JSON.stringify(base));
}


export default base;