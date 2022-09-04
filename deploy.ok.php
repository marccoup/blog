<?php

shell_exec("npm run build");

shell_exec("git add . && git commit -m \"build and deploy\" && git push");