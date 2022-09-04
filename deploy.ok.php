<?php

shell_exec("npm run build");

shell_exec("git add -A && git commit -m \"build and deploy\"");