#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 主分支提交
git add .
git commit -m 'update'
# 主分支为main
git push -f origin main
# 生成静态文件
npm run build

# 进入生成的文件夹
cd blog/.vuepress/dist

# gh-pages 分支提交
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:shuwenjunn/blog.git main:gh-pages

cd -
rm -rf blog/.vuepress/dist