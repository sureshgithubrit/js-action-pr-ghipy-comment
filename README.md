npm i @actions/core@1.10.0
npm i @actions/github@5.1.1
npm i @octokit/rest@20.0.1
npm i giphy-api@2.0.2

npm install @octokit/rest giphy-api @actions/core @actions/github

npm install @vercel/ncc@0.38.1
npm install -g @vercel/ncc (to install globally)
npm i -g @vercel/ncc@0.38.1
ncc build index.js

vi test.js
  534  ncc build test.js -o dist_test
  535  cd ..
  536  ll
  537  rm -rf node_modules package-lock.json
  538  npm install
  539  npx ncc build index.js -o dist
  540  npx ncc build index.js -o dist
  541  npm install
  542  ls node_modules/
  543  ls -l node_modules/@actions/core
  544  ls -l node_modules/@actions/github
  545  ls -l node_modules/@octokit/rest
  546  ls -l node_modules/giphy-api
  547  ncc build index.js -o dist
  548  ncc build index.js -o dist --debug
  549  npx --package @vercel/ncc@0.38.0 ncc build index.js -o dist --debug
  550  npx --package @vercel/ncc@0.38.0 ncc build index.js -o dist --debug
  551  npx --package @vercel/ncc@0.38.0 ncc build index.js -o dist --debug
  552  rm -rf node_modules/@octokit/rest # For Windows: rmdir /s /q node_modules\@octokit\rest
  553  npm install
  554  npx --package @vercel/ncc@0.38.0 ncc build index.js -o dist
