const firebaseConfig = {
    apiKey: "AIzaSyDULZ4lyIkgE7I1flor12gl3tZyDkih97Q",
    authDomain: "a1120409.firebaseapp.com",
    databaseURL: "https://a1120409-default-rtdb.firebaseio.com",
    projectId: "a1120409",
    storageBucket: "a1120409.appspot.com",
    messagingSenderId: "828442810450",
    appId: "1:828442810450:web:4de53eae9730cbb009678b",
    measurementId: "G-M3369Q9HPD"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

// ; (async () => {
//     let result = await write('BBB', 'test')
//     console.log(result)

//     let response = await read('test')
//     console.log(response)

//     listen('test', (value) => {
//         console.log(value)
//     })
// })()
