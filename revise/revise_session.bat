@echo off

SET REVISE_PATH=%~dp0

julia --color=yes --project=%REVISE_PATH% --load=%REVISE_PATH%\revise_load_script.jl