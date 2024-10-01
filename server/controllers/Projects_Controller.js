const { Octokit } = require('@octokit/core')
const { repoList } = require('../stubs/projectsStub')

const GET_ProjectsList = async (req, res) => {
  res.status(200).send(JSON.stringify(repoList))
}

const GET_repo_data = async (req, res, next) => {
  debugger
  const { owner, repo } = req.params
  console.log(req.params)

  const octokit = new Octokit()
  await octokit.request(`GET /repos/${owner}/${repo}/commits`, {
    owner: owner,         
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  .then(res => {
    return res
  })
  .catch(err => err)
  next()
}

module.exports = {
  GET_ProjectsList,
  GET_repo_data,
}