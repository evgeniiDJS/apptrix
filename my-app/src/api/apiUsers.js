import axios from 'axios';
import { setUsers } from '../redux/repoUsers';

export const getUser = () => {
    return async (dispatch) => {
        const response = await axios.get('https://example.youtrack.cloud/api/admin/users/me?fields=id,login,name,email', {headers: { Authorization: `Bearer perm:amFuZS5kb2U=.UkVTVCBBUEk=.wcKuAok8cHmAtzjA6xlc4BrB4hleaX`    } })
        dispatch(setUsers(response.data))
    }
}