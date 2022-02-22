import { useStore } from 'vuex'
import { computed } from "vue";


const useUI = () => {

    const store = useStore()

    return {


        //Side Menu option
        // sideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen']),
        sideMenuOpen: computed({
          get(){
            return store.getters['ui/isSideMenuOpen']
          }, 
          set(val) {
            console.log({val})
            store.commit('ui/toggleSideMenu')
          }
        }),
        toggleSideMenu(){
        store.commit('ui/toggleSideMenu')
      },
      
    }


} 

export default useUI