# La Cabane à Burger 🍔

## How To

### 🌈 Implement a new feature
1. Create a feature branch

    `git flow feature start my-new-feature`

2. Push your branch to remote

    `git push origin feature/my-new-feature -u`

3. Work on your feature

    `git commit -m 'feat(scope): my improvment description'`

4. Create a pull request for other developers to test your work

5. Merge to develop, and delete feature branch

    `git flow feature finish`
    
### 🐞 Fix a bug on develop
1. Create a bugfix branch

    `git flow bugfix start my-new-bugfix`

2. Push your branch to remote

    `git push origin feature/my-new-bugfix -u`

3. Work on your bugfix

    `git commit -m 'fix(scope): my fix description'`

4. Create a pull request for other developers to test your work

5. Merge to develop, and delete feature branch

    `git flow bugfix finish`

### 🚀 Release a version
1. Create a release branch

    `git flow release start 1.x.x`

2. Push your branch to remote

    `git push origin release/1.x.x`

3. Work on your release, commit eventually minor changes

    `git commit -m 'chore(all): some minor changes'`

4. Release version (version bump + tag + update changelogs)

    `yarn release # lerna version --conventional-commits`

5. Merge to develop and master, and delete release branch

    `git flow release finish -n -p`

### 🐛 Hotfix in production
1. Create a hotfix branch

    `git flow hotfix start 1.2.x`

2. Push your branch to remote

    `git push origin hotfix/1.2.x`

3. Work on your hotfix, commit changes

    `git commit -m 'fix(all): fix critical bug'`

4. Release version (version bump + tag + update changelogs)

    `yarn hotfix # lerna version patch --conventional-commits`

5. Merge to develop and master, and delete release branch

    `git flow hotfix finish -n -p`


## Conventions

### Branches
The naming convention for the branches is kebab case.

Example : `feature/my-new-feature`

### Commits
This project uses conventional commits https://www.conventionalcommits.org/en/v1.0.0/#specification

#### Scopes

##### Common
- all
