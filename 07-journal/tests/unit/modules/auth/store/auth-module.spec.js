
import axios from 'axios'
import createVuexStore from '../../../mock-data/mock-store'

describe('Pruebas en el auth-module', () =>{

    test('estado inicial', () =>{

        const store = createVuexStore({
                status: 'authenticating',
                user: null,
                idToken: null,
                refreshToken: null
        })

        const { status, user, idToken, refreshToken} = store.state.auth

        expect(status).toBe('authenticating')
        expect(user).toBe(null)
        expect(idToken).toBe(null)
        expect(refreshToken).toBe(null)

    })


    test("Mutations: login user ", ()=>{

        const store = createVuexStore({
            status: 'authenticating',
            user: null,
            idToken: null,
            refreshToken: null
        })

        const payload = {
            user: {name: "Carlos", email: "carlos@gmail.com"},
            idToken: 'ABC-123',
            refreshToken: 'XYZ-987'
        }

        store.commit('auth/loginUser', payload)

        const { status, user, idToken, refreshToken} = store.state.auth

        expect(status).toBe('authenticated')
        expect(user).toEqual({name: "Carlos", email: "carlos@gmail.com"})
        expect(idToken).toBe('ABC-123')
        expect(refreshToken).toBe('XYZ-987')

    })

    test("Mutation: logout ", ()=>{

        const store = createVuexStore({
            status: 'autenticated',
            user: {name: 'carlos', email: 'carlos@gmail.com'},
            idToken: 'ABC-123',
            refreshToken: 'XYZ-987'
        })

        store.commit('auth/logout')

        const { status, user, idToken, refreshToken} = store.state.auth

        expect(status).toBe('not-authenticated')
        expect(user).toBeFalsy()
        expect(idToken).toBeFalsy()
        expect(refreshToken).toBeFalsy()

        expect (localStorage.getItem('idToken')).toBeFalsy()
        expect (localStorage.getItem('refreshToken')).toBeFalsy()

    })

    //getters

    test("Getter: username currentUser",() => {

        const store = createVuexStore({
            status: 'autenticated',
            user: {name: 'carlos', email: 'carlos@gmail.com'},
            idToken: 'ABC-123',
            refreshToken: 'XYZ-987'
        })

        expect(store.getters['auth/currentState']).toBe('autenticated')
        expect(store.getters['auth/userName']).toBe('carlos')

    })

    //Actions
    test("Actions: createUser - Error usuario ya existe", async() =>{

        const store = createVuexStore({
            status: 'not-authenticated',
            user: null,
            idToken: null,
            refreshToken: null
        })

        const newUser = {name: 'Test User', email: 'test@test.com', password: '123456'}

        const resp = await store.dispatch('auth/createUser', newUser)
        expect(resp).toEqual({ok: false, message: 'EMAIL_EXISTS'})

        const { status, user, idToken, refreshToken} = store.state.auth

        expect(status).toBe('not-authenticated')
        expect(user).toBeFalsy()
        expect(idToken).toBeFalsy()
        expect(refreshToken).toBeFalsy()


    })

    test("Actions: createUser - crea el usuario", async() =>{

        const store = createVuexStore({
            status: 'not-authenticated',
            user: null,
            idToken: null,
            refreshToken: null
        })

        const newUser = {name: 'Test Unit', email: 'test2@test.com', password: '123456'}
        
        //SignIn
        await store.dispatch('auth/signInUser', newUser)
        
        const { idToken } = store.state.auth
        
        //Borramos el usuario
        
        const deleteResponse = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyAVqds0QK-oltynSaPPXzoEt7qHTKZSh2c`, {
            idToken
        })
        
        //Crear usuario
        
        const resp = await store.dispatch('auth/createUser', newUser)

        console.log(resp)
        expect(resp).toEqual({ok: true})

        const { status, user, idToken:token, refreshToken} = store.state.auth

        expect(status).toBe('authenticated')
        expect(user).toMatchObject({name: 'Test Unit', email: 'test2@test.com'})
        expect(typeof token).toBe('string')
        expect(typeof refreshToken).toBe('string')


    })

    test('Actions: checkAuthentication - POSITIVA', async() => {
        
        const store = createVuexStore({
            status: 'not-authenticated', 
            user: null,
            idToken: null,
            refreshToken: null
        })

        // SignIn
        const signInResp = await store.dispatch('auth/signInUser', { email: 'test2@test.com', password:'123456' })
        const { idToken } = store.state.auth 
        store.commit('auth/logout')

        localStorage.setItem('idToken', idToken)

        const checkResp = await store.dispatch('auth/checkAuthentication')
        const { status, user, idToken:token, refreshToken } = store.state.auth

        expect(checkResp).toEqual({ message: "", ok: true })
        
        expect( status ).toBe( 'authenticated' )
        expect( user ).toMatchObject({ name: 'Test Unit', email: 'test2@test.com' })
        expect( typeof token ).toBe('string')

    })
    


    test('Actions:checkAuthentication - NEGATIVA', async() => {
        
        const store = createVuexStore({
            status: 'authenticating',
            user: null,
            idToken: null,
            refreshToken: null
        })

        localStorage.removeItem('idToken')
        const checkResp1 = await store.dispatch('auth/checkAuthentication')
        expect(checkResp1).toEqual({ ok: false, message: 'no hay token' })
        expect( store.state.auth.status ).toBe('not-authenticated')

        localStorage.setItem('idToken','ABC-123')
        const checkResp2 = await store.dispatch('auth/checkAuthentication')
        expect(checkResp2).toEqual({ ok: false, message: 'INVALID_ID_TOKEN' })
        expect( store.state.auth.status ).toBe('not-authenticated')

    })
    


    

})