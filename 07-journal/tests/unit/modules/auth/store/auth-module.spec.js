
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

    

})