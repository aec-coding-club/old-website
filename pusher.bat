@echo off
git add . && git commit -am "%*" && git push && git push heroku master