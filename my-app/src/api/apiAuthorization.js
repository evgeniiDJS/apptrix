import axios from 'axios';
import { setRepo } from '../redux/repoAuthorization';


export const getRepo = async () => {
    await axios.post(`http://erp.apptrix.ru/api/token/`, {  "username": "erp_user", "password": "12qwaszx12qwaszx"  })
                .then( function (reponse) {
                    setRepo(reponse.data)
                    window.localStorage.refresh = reponse.data.refresh;
                    window.localStorage.access = reponse.data.access;
                })
                .catch( function (error) {
                    console.log(error)
                })
}