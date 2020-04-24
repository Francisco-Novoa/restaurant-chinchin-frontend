
export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
            //store variables goes here
            path: 'http://localhost:5000',
            isAuthenticatedUser: false,
            isAuthenticatedRestorauntUser: false,
            isAuthenticatedAdmin: false,
            name: '',
            email: '',
            phone: '',
            password_hash: '',
            errorsRegisterUser: '',
            errorsRegisterAdmin: '',
            errorsRegisterRestaurant: '',
            errorsLoginUser: '',
            errorsLoginRestaurant: '',
            errorsLoginAdmin: '',
            currentUser: {},
            currentAdmin: {},
            currentRestaurant: {},
            allRestaurants: [],
            allProducts:[]
        },
        actions: {
            //actions go here.
            registerUserPost: () => {
                const store = getStore();
                const data = {
                    name: store.name,
                    email: store.email,
                    phone: store.phone,
                    password_hash: store.password_hash,
                }
                fetch(store.path + '/registration', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({ errorsRegisterUser: data })
                        }
                        else {
                            setStore({
                                errorsRegisterUser: '',
                                password_hash: '',
                                name: '',
                                email: '',
                                phone: '',
                                currentUser: data,
                                isAuthenticatedUser: true,
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedUser', true)
                        }
                    })
            },
            loginUserPost: () => {
                const store = getStore();
                const data = {
                    email: store.email,
                    password_hash: store.password_hash
                }
                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({ errorsLoginUser: data })
                            console.log(getStore().errorsLoginUser)
                        }
                        else {
                            setStore({
                                errorsLoginUser: '',
                                password_hash: '',
                                email: '',
                                currentUser: data,
                                isAuthenticatedUser: true,
                            })
                            console.log(data)
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedUser', true)
                        }
                    })
            },
            handleChange: e => {
                let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                setStore({ [e.target.name]: value })
            },
            isAuthenticatedUser: () => {
                if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('isAuthenticatedUser')) {
                    setStore({
                        isAuthenticatedUser: sessionStorage.getItem('isAuthenticatedUser'),
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                    })
                }
            },
            isAuthenticatedRestorauntUser: () => {
                if (sessionStorage.getItem('currentRestaurant') && sessionStorage.getItem('isAuthenticatedRestorauntUser')) {
                    setStore({
                        isAuthenticatedRestorauntUser: sessionStorage.getItem('isAuthenticatedRestorauntUser'),
                        currentUser: JSON.parse(sessionStorage.getItem('currentRestaurant')),
                    })
                }
            },
            isAuthenticatedAdmin: () => {
                if (sessionStorage.getItem('currentAdmin') && sessionStorage.getItem('isAuthenticatedAdmin')) {
                    setStore({
                        isAuthenticatedAdmin: sessionStorage.getItem('isAuthenticatedAdmin'),
                        currentAdmin: JSON.parse(sessionStorage.getItem('currentAdmin')),
                    })
                }
            },
            Logout: () => {
                sessionStorage.removeItem('currentUser')
                setStore({
                    isAuthenticatedUser: false,
                    currentUser: {},
                })
            },
            LogoutRestaurant: () => {
                sessionStorage.removeItem('currentRestaurant')
                setStore({
                    isAuthenticatedRestorauntUser: false,
                    currentRestaurant: {},
                })
            },
            LogoutAdmin: () => {
                sessionStorage.removeItem('currentAdmin')
                setStore({
                    isAuthenticatedAdmin: false,
                    currentAdmin: {},
                })
            },
            registerRestaurantPost: () => {
                const store = getStore();
                const data = {
                    name: store.name,
                    email: store.email,
                    phone: store.phone,
                    password_hash: store.password_hash
                }
                fetch(store.path + '/restaurantregistration', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({ errorsRegisterRestaurant: data })
                            console.log(getStore().errorsRegisterRestaurant)
                        }
                        else {
                            setStore({
                                errorsRegisterRestaurant: '',
                                password_hash: '',
                                name: '',
                                phone: '',
                                email: '',
                                currentRestaurant: data,
                                isAuthenticatedRestorauntUser: true,
                            })
                            //console.log(data)
                            sessionStorage.setItem('currentRestaurant', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedRestorauntUser', true)

                        }
                    })
            },
            loginRestaurantPost: () => {
                const store = getStore();
                const data = {
                    email: store.email,
                    password_hash: store.password_hash
                }
                fetch(store.path + '/restaurantlogin', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({ errorsLoginRestaurant: data })
                            console.log(getStore().errorsLoginRestaurant)
                        }
                        else {
                            setStore({
                                errorsLoginRestaurant: '',
                                password_hash: '',
                                email: '',
                                currentRestaurant: data,
                                isAuthenticatedRestorauntUser: true,
                            })
                            console.log(data)
                            sessionStorage.setItem('currentRestaurant', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedRestorauntUser', true)
                        }
                    })
            },
            registerAdminPost: () => {
                const store = getStore();
                const data = {
                    name: store.name,
                    email: store.email,
                    password_hash: store.password_hash
                }
                fetch(store.path + '/adminregistration', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({ errorsRegisterAdmin: data })
                            console.log(getStore().errorsRegisterAdmin)
                        }
                        else {
                            setStore({
                                errorsRegisterAdmin: '',
                                password_hash: '',
                                name: '',
                                email: '',
                                currentAdmin: data,
                                isAuthenticatedAdmin: true,
                            })
                            console.log(data)
                            sessionStorage.setItem('currentAdmin', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedAdmin', true)
                        }
                    })
            },
            loginAdminPost: () => {
                const store = getStore();
                const data = {
                    email: store.email,
                    password_hash: store.password_hash
                }
                fetch(store.path + '/adminlogin', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({ errorsLoginAdmin: data })
                            console.log(getStore().errorsLoginAdmin)
                        }
                        else {
                            setStore({
                                errorsLoginAdmin: '',
                                password_hash: '',
                                email: '',
                                currentAdmin: data,
                                isAuthenticatedAdmin: true,
                            })
                            console.log(data)
                            sessionStorage.setItem('currentAdmin', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedAdmin', true)
                        }
                    })
            },
            getAllRestaurants: async url => {
                try {
                    const all = await fetch(url, {
                        method: "GET",
                        headers: { "Content-Type": "aplication/json" }
                    })
                    const data = await all.json()
                    if (data.msg){
                        console.log(data.msg)
                    }
                    setStore({
                        allRestaurants: data
                    })
                }
                catch (error) {
                    console.log(error)
                }
            },
            updateRestaurant: async (url, body) => {
                try {
                    const all = await fetch(url, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    })
                    return "ok"
                }
                catch (error) {
                    console.log(error)
                }
            },
            newProduct: async (url,body) =>{
                try {
                    const all = await fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json"},
                        body: JSON.stringify(body)
                    })
                    const result=await all.json() 
                    console.log(result)
                    return result
                }
                catch (error) {
                    console.log(error)
                }
            },
            getAllProductsOf:async (url) =>{
                try {
                    const all = await fetch(url, {
                        method: "GET",
                        headers: { "Content-Type": "application/json"},
                    })
                    const data=await all.json()
                    setStore({
                        allProducts: data
                    })
                    return "ok"
                }
                catch (error) {
                    console.log(error)
                }
            },
            updateCurrUser: (newUser,oldUser)=>{
                let aux={...oldUser}
                aux.restaurantuser=newUser
                console.log(aux)
                setStore({currentUser:aux})
                sessionStorage.setItem('currentUser', JSON.stringify(aux))
                sessionStorage.setItem('currentRestaurant', JSON.stringify(aux))
            },
            updateCurrRest: (newUser,oldUser)=>{
                let aux={...oldUser}
                aux.restaurantuser=newUser
                console.log(aux)
                setStore({currentRestaurant:aux})
                sessionStorage.setItem('currentUser', JSON.stringify(aux))
                sessionStorage.setItem('currentRestaurant', JSON.stringify(aux))
            },
            updateProduct: async (url, body) => {
                try {
                    const all = await fetch(url, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    })
                    return "ok"
                }
                catch (error) {
                    console.log(error)
                }
            },
            deleteProduct: async (url) => {
                try {
                    const all = await fetch(url, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    })
                    return "ok"
                }
                catch (error) {
                    console.log(error)
                }
            },
        }
    }
}