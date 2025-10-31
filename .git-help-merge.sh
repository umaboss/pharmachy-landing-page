#!/bin/bash
# Git Merge Helper Script

echo "=== Git Status ==="
git status

echo -e "\n=== Recent Commits ==="
git log --oneline -5

echo -e "\n=== Remote Status ==="
git remote -v

echo -e "\n=== Branch Comparison ==="
git log --oneline HEAD..origin/main
git log --oneline origin/main..HEAD

echo -e "\n=== All Branches ==="
git branch -a

