@echo on

set targDir="\program files\nginx-1.18.0\html"
echo %targDir%

pushd %targDir%
rem d:
dir
rem rmdir /S /Q %targDir%\
erase /S /Q *.*
dir
popd

xcopy /E /Y dist\*.* %targDir%
dir %targDir%