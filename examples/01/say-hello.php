<?php

fgets(STDIN);

while($line = fgets(STDIN)) {
    $name = rtrim($line);
    echo "Hello $name!\n";
}

?>
