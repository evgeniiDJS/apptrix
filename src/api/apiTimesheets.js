import axios from 'axios';
import { setTime } from '../redux/repoTimesheets';


export const getTime = () => {
    return async (dispatch) => {
        await axios.get(`https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)`, {headers: { Authorization: `Bearer perm:amFuZS5kb2U=.UkVTVCBBUEk=.wcKuAok8cHmAtzjA6xlc4BrB4hleaX`    } })
            .then(reponse => dispatch(setTime(reponse.data)))
    }
}