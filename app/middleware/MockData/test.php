<?php

$res = shell_exec('node ./MockData.js');

var_dump($res);
var_dump(json_decode($res));
