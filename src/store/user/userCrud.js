import axios from "axios";
import {formatDate} from "date-fns/format";

const state= {
    users: []
};

const getters= {
    getUsers: state => state.users
};

const mutations= {
    setUsers: (state,users) => { state.users = users.map(user=>({
        ...user,
        created_at: formatDate(new Date(user.created_at), 'dd MMM yyyy HH:mm'),
        updated_at: formatDate(new Date(user.updated_at), 'dd MMM yyyy HH:mm')
    }) )

    }
};

const actions = {
    async getUsers({commit}) {
        try {
           const response = await axios.get('users');
           console.log(response.data.users);
           commit('setUsers',response.data.users);
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
