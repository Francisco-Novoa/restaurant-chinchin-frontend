
export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
            //store variables goes here
            path: 'http://localhost:5000',
            isAuthenticatedUser: false,
            isAuthenticatedRestaurantUser: false,
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
            allProducts:[],
            restaurantFocus:"",
            email_confirm_success: null,
            email_confirm_msg: null,
            email_confirm_success_res: null,
            email_confirm_msg_res: null,
            email_confirm_success_admin: null,
            email_confirm_msg_admin: null,
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
                            alert(data.msg)
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
                            alert(data.msg)
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
                        isAuthenticatedRestaurantUser: false,
                        isAuthenticatedAdmin:false,
                        currentRestaurant: {},
                        currentAdmin:{}
                    })
                    sessionStorage.removeItem('currentRestaurant')
                    sessionStorage.removeItem('currentAdmin')    
                }
            },
            isAuthenticatedRestaurantUser: () => {
                if (sessionStorage.getItem('currentRestaurant') && sessionStorage.getItem('isAuthenticatedRestaurantUser')) {
                    setStore({
                        isAuthenticatedRestaurantUser: sessionStorage.getItem('isAuthenticatedRestaurantUser'),
                        currentRestaurant: JSON.parse(sessionStorage.getItem('currentRestaurant')),
                        isAuthenticatedUser: false,
                        isAuthenticatedAdmin: false,
                        currentUser: {},
                        currentAdmin:{}
                    })
                    sessionStorage.removeItem('currentUser')
                    sessionStorage.removeItem('currentAdmin')  
                    sessionStorage.removeItem('isAuthenticatedUser')
                    sessionStorage.removeItem('isAuthenticatedAdmin')  
                }
            },
            isAuthenticatedAdmin: () => {
                if (sessionStorage.getItem('currentAdmin') && sessionStorage.getItem('isAuthenticatedAdmin')) {
                    setStore({
                        isAuthenticatedAdmin: sessionStorage.getItem('isAuthenticatedAdmin'),
                        currentAdmin: JSON.parse(sessionStorage.getItem('currentAdmin')),
                        isAuthenticatedUser: false,
                        isAuthenticatedRestaurantUser:false,
                        currentRestaurant: {},
                        currentUser:{}
                    })
                    sessionStorage.removeItem('currentUser')
                    sessionStorage.removeItem('isAuthenticatedUser')
                    sessionStorage.removeItem('isAuthenticatedRestaurantUser')
                    sessionStorage.removeItem('currentRestaurant')    
                }
            },
            Logout: () => {
                sessionStorage.removeItem('currentUser')
                sessionStorage.removeItem('currentRestaurant')
                sessionStorage.removeItem('currentAdmin')
                setStore({
                    isAuthenticatedRestaurantUser: false,
                    isAuthenticatedUser: false,
                    isAuthenticatedAdmin:false,
                    currentUser: {},
                    currentRestaurant: {},
                    currentAdmin:{}
                })
            },
            LogoutRestaurant: () => {
                sessionStorage.removeItem('currentUser')
                sessionStorage.removeItem('currentRestaurant')
                sessionStorage.removeItem('currentAdmin')
                setStore({
                    isAuthenticatedRestaurantUser: false,
                    isAuthenticatedUser: false,
                    isAuthenticatedAdmin:false,
                    currentUser: {},
                    currentRestaurant: {},
                    currentAdmin:{}
                })
            },
            LogoutAdmin: () => {
                sessionStorage.removeItem('currentUser')
                sessionStorage.removeItem('currentRestaurant')
                sessionStorage.removeItem('currentAdmin')
                setStore({
                    isAuthenticatedRestaurantUser: false,
                    isAuthenticatedUser: false,
                    isAuthenticatedAdmin:false,
                    currentUser: {},
                    currentRestaurant: {},
                    currentAdmin:{}
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
                            alert(data.msg)
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
                                isAuthenticatedRestaurantUser: true,
                            })
                            //console.log(data)
                            sessionStorage.setItem('currentRestaurant', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedRestaurantUser', true)

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
                            alert(data.msg)
                            setStore({ errorsLoginRestaurant: data })
                            console.log(getStore().errorsLoginRestaurant)
                        }
                        else {
                            setStore({
                                errorsLoginRestaurant: '',
                                password_hash: '',
                                email: '',
                                currentRestaurant: data,
                                isAuthenticatedRestaurantUser: true,
                            })
                            console.log(data)
                            sessionStorage.setItem('currentRestaurant', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticatedRestaurantUser', true)
                            console.log(sessionStorage.getItem('currentRestaurant'))
                            console.log(sessionStorage.getItem('isAuthenticatedRestaurantUser'))
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
                            alert(data.msg)
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
                            alert(data.msg)
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
                    const response= await all.json()
                    console.log(response)
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
                    setStore({
                        allProducts: []
                    })
                    const all = await fetch(url, {
                        method: "GET",
                        headers: { "Content-Type": "application/json"},
                    })
                    const data=await all.json()
                    setStore({
                        allProducts: data
                    })
                    return("all products fetched")
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
            deleteProduct: async (url, reload, url2) => {
                try {
                    const all = await fetch(url, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    })
                    const result = await all.json() 
                    console.log(result)
                    const re = await reload(url2)
                    const result2 =await re
                    console.log(result2)
                }
                catch (error) {
                    console.log(error)
                }
            },
            handleRestaurantFocus: (restaurant )=>{
                setStore({restaurantFocus:restaurant})
            },
            getConfirmation: () =>{
                const store =getStore()
                const data = {
                    email: store.email
                }
                fetch(store.path + '/change-password/',{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                        if (data.success){
                            setStore({
                                email_confirm_success: data.success
                            })
                        }else{
                            setStore({
                                email_confirm_msg: data.msg,
                                
                            })
                        }
                    })
            },
            getPasswordChange: (token, history) =>{
                const store =getStore()
                const data = {
                    password_hash: store.password_hash
                }
                fetch(store.path + '/change-password-confirm/'+ token,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    alert("Your password was change successfully")
                    history.push("/")
                    setStore({
                        email: ''
                    })
                })
                    
            },
            getConfirmationRestaurant: () =>{
                const store =getStore()
                const data = {
                    email: store.email
                }
                fetch(store.path + '/restchange-password/',{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                        if (data.success){
                            setStore({
                                email_confirm_success_res: data.success
                            })
                        }else{
                            setStore({
                                email_confirm_msg_res: data.msg
                            })
                        }
                    })
            },
            getPasswordChangeRestaurant: (token, history) =>{
                const store =getStore()
                const data = {
                    password_hash: store.password_hash
                }
                fetch(store.path + '/restchange-password-confirm/'+ token,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    alert("Your password was change successfully")
                    history.push("/")
                    setStore({
                        email: ''
                    })
                    })
                    
            },
            getConfirmationAdmin: () =>{
                const store =getStore()
                const data = {
                    email: store.email
                }
                fetch(store.path + '/adminchange-password/',{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                        if (data.success){
                            setStore({
                                email_confirm_success_admin: data.success
                            })
                        }else{
                            setStore({
                                email_confirm_msg_admin: data.msg
                            })
                        }
                    })
            },
            getPasswordChangeAdmin: (token, history) =>{
                const store =getStore()
                const data = {
                    password_hash: store.password_hash
                }
                fetch(store.path + '/adminchange-password-confirm/'+ token,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    alert("Your password was change successfully")
                    history.push("/")
                    setStore({
                        email: ''
                    })
                    })
                    
            },
        }
    }
}