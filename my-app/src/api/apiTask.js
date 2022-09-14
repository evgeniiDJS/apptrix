import axios from 'axios';
import { setTask } from '../redux/repoTask';


export const getTask = (project) => {
    return async (dispatch) => {
        await axios.get(`https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)&query=${project}`, {headers: { Authorization: `Bearer perm:amFuZS5kb2U=.UkVTVCBBUEk=.wcKuAok8cHmAtzjA6xlc4BrB4hleaX`    } })
            .then(reponse => dispatch(setTask(reponse.data)))
       
    }
}
