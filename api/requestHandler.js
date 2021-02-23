import axios from 'axios';
/**
 * Handles sending api requests to github
 * example url: https://api.github.com/repos/twitter/bootstrap/commits?per_page=25
 */

const RequestHandler = {
    async getCommits (user, project, num) {
        const response = await axios.get(`https://api.github.com/repos/${user}/${project}/commits?per_page=${num}`).catch(error => {
            return {error: error};
        });
        //console.log(response);
        return response;
    }
}

export default RequestHandler;