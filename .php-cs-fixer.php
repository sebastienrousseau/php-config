<?php
$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude(['vendor']);

$config = new PhpCsFixer\Config();
return $config->setRules([
    '@PER-CS2.0' => true,
    '@PHP82Migration' => true,
    'strict_param' => true,
    'array_syntax' => ['syntax' => 'short'],
])->setFinder($finder);
