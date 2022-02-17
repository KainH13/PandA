# Commands for working on a github repository as a group

# Steps when starting new work on a shared repository
# Pull any recent changes made by other developers
git pull origin main # in legacy projects main may be master, check the name

# checkout new branch
git checkout -b [branchName]

# stage all changes
git add .

# commit staged changes
git commit -m "added something"

# push branch to remote repository so that we can all review changes before merging them into main
git push origin [branchName]

# Got to GitHub and click 'Compare and Pull Request'
# leave a comment describing exactly what you've done and create a pull request
# other contributors can review and approve this pole request

# Once approved, merge pull request in review UI on GitHub

# switching back to main, or other, branch to restart the process
git checkout main

# Merging from one branch to another locally
git merge main # merges main changes into the currently active branch