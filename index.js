// const { Octokit } = require('@octokit/rest'); // <-- REMOVE OR COMMENT OUT THIS LINE
const Giphy = require('giphy-api');
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const githubToken = core.getInput('github-token');
        const giphyApiKey = core.getInput('giphy-api-key');

        // Get the authenticated Octokit client directly from @actions/github
        // This line replaces the one above that required @octokit/rest
        const octokit = github.getOctokit(githubToken); // <-- NEW LINE

        const giphy = Giphy(giphyApiKey);

        const context = github.context;
        const { owner, repo, number } = context.issue;

        const prComment = await giphy.random('thank you');

        await octokit.issues.createComment({
            owner,
            repo,
            issue_number: number,
            body: `### PR - #${number} \n\n 👋 Thank you for the contribution! \n\n ![Giphy](${prComment.data.images.downsized.url})`
        });

        core.setOutput('comment-url', `${prComment.data.images.downsized.url}`);
        console.log(`Giphy GIF comment added successfully! Comment URL: ${prComment.data.images.downsized.url}`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

run();