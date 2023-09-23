## Answer

1. What does `git clean` do? 
> git clean is a Git command used to remove untracked files and directories from your working directory. Untracked files are those that Git is not currently aware of, meaning they have not been added to the version control system using git add.
2. What do the `-d and -f` flags for `git clean` do? 
> The -d flag in git clean is used to delete untracked directories along with their contents. The -f flag is used to force the removal of untracked files or directories, bypassing confirmation. When used together, git clean -df will remove untracked files and directories, including their contents, forcefully without confirmation. Use it with caution to avoid unintentional data loss.
3. What `git` command creates a branch?
> git branch name_branch 
4. What is the difference between a fast-forward and recursive merge? 
> a fast-forward merge is a simple and direct way of combining branches when there is no divergence or conflict, resulting in a linear history. A recursive merge is used when branches have diverged or when there are conflicting changes, and it creates a new merge commit to integrate the changes, resulting in a more complex history with merge commits.
5. What `git` command changes to another branch? 
> git checkout name_branch
6. How do you remove **modified or deleted** files from the working directory? 
> To remove modified files, use git checkout <file>. To remove deleted files and stage the removal, use git rm <file> followed by git commit.
7. What `git` command deletes a branch?
> git branch -d branchname
8. What does the `git diff` command do?
> git diff shows differences in a Git repository, allowing you to compare changes between different states, such as the working directory and the last commit.
9.  How do you remove files from the staging area?
> use git reset command
10. How do merge conflicts happen?
> Merge conflicts happen in Git when two branches have conflicting changes to the same code or file. Git can't automatically merge them, so it marks the conflicts. You must manually resolve conflicts by editing the file, removing conflict markers, and choosing which changes to keep. After resolving, commit the changes to complete the merge.