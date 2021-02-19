/**
 * Handles sending api requests to github
 * example url: https://api.github.com/repos/twitter/bootstrap/commits?per_page=25
 */

const RequestHandler = {
    getCommits (user, project, num) {
        return fetch(`https://api.github.com/repos/${user}/${project}/commits?per_page=${num}`, {
            credentials: 'omit'
        }).then(res => res.json());
    }
}

export default RequestHandler;