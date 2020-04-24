
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
                            console.log(data)
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
