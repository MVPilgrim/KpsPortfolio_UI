@echo on

set targDir="\program files\nginx-1.18.0\html"

pushd %targDir%
d:
dir
rem Note that html subdir will not be deleted because working directory points there.
rem But this is desired. Only the contents of html should be deleted.
rmdir /S /Q %targDir%
dir
popd

xcopy /E /Y dist\*.* %targDir%
dir %targDir%