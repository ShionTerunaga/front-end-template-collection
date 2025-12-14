# Create frontend template cli Project

This is template of frontend projects. For now, it will be for macos only.We
will not put this repository on npm for now.

## setup

### mac os

1. Go to root directory.

```bash
cd ~
```

2. Check your location

```bash
pwd
```

It should be as follows

```
Users/<yourname>
```

3. Make `frontend-tools` directory

```bash
mkdir frontend-tools
```

4. Go to `frontend-tools` directory

```bash
cd frontend-tools
```

5. Get template files

```bash
curl -L "https://github.com/ShionTerunaga/front-end-template-collection/archive/refs/heads/release.zip" -o repo.zip
```

6. Unzip

```bash
unzip repo.zip "*/execution/mac/*" -d .
```

7. Move files

```bash
 mv ~/frontend-tools/front-end-template-collection-release/execution/mac/* ~/frontend-tools/
```

8. Remove files

```bash
rm repo.zip
rm -rf front-end-template-collection-release
```

9. Local Package Installation

```bash
npm install -g .
```

10. Authentication

```bash
chmod +x ~/frontend-tools/tmp/index.js && chmod +x ~/frontend-tools/upgrade-tmp.js
```

### windows os

1. Go to root directory.

```bash
cd ~
```

2. Check your location

```bash
pwd
```

It should be as follows

```
C:\Users\<yourname>
```

3. Make `frontend-tools` directory

```bash
mkdir frontend-tools
```

4. Go to `frontend-tools` directory

```bash
cd frontend-tools
```

5. Get template files

```bash
Invoke-WebRequest -Uri "https://github.com/ShionTerunaga/front-end-template-collection/archive/refs/heads/release.zip" -OutFile "repo.zip"
```

6. Unzip

```bash
Expand-Archive -Path "repo.zip" -DestinationPath ".\extract" -Force
$root = Get-ChildItem -Directory .\extract | Where-Object { Test-Path (Join-Path $_.FullName "execution\win") } | Select-Object -First 1
Move-Item -Path (Join-Path $root.FullName "execution\win\*") -Destination "$env:USERPROFILE\frontend-tools" -Force
```

7. Remove "repo.zip"

```bash
Remove-Item "repo.zip" -Force
```

8. Remove extract

```bash
rm extract -Recurse -Force
```

9. Local Package Installation

```bash
npm install -g .
```

## usage

### create template

```bash
create-frontend-tmp
```

## new update

### mac os

```bash
upgrade-frontend-tmp && chmod +x ~/frontend-tools/tmp/index.js && chmod +x ~/frontend-tools/upgrade-tmp.js
```

### windows os

```bash
upgrade-frontend-tmp
```

Happy Hucking!!
