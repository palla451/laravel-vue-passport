import axios from "axios";


const state= {
    users: []
};

const getters= {
    getUsers: state => state.users
};

const mutations= {
    setUsers: (state,users) => { state.users = users }
};

const actions = {
    async getUsers({commit}) {
        try {
           const response = await axios.get('users');
           console.log(response.data.users);
           commit('setUsers',response.data.users)
        }catch (e) {
            console.log(e.message);
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
