<?php

namespace Marccoup\Blog;

final class Config
{
    public function __construct(
        public readonly string $projectRoot,
        public readonly string $layoutFile,
        public readonly string $contentTemplateFile,
        public readonly string $routesDir,
        public readonly string $contentDir,
        public readonly string $staticDir,
        public readonly string $outDir,
        public readonly string $siteTitle,
        public readonly string $baseUrl,
    ) {
    }

    public static function load(string $projectRoot, BuildEnvironment $environment = BuildEnvironment::LOCAL): self
    {
        $config = [
            'site_title'            => 'Website',
            'base_url'              => '',
            'layout_file'           => '/src/layout.php',
            'content_template_file' => '/src/content.php',
            'routes_dir'            => '/src/routes',
            'content_dir'           => '/content',
            'static_dir'            => '/static',
            'out_dir'               => '/docs',
        ];
        $config = array_merge($config, include $projectRoot.'/config.php');

        if ($environment !== BuildEnvironment::PRODUCTION && isset($config['environments'][$environment->value])) {
            $config = array_merge($config, $config['environments'][$environment->value]);
        }

        return new self(
            projectRoot: $projectRoot,
            layoutFile: $projectRoot.$config['layout_file'],
            contentTemplateFile: $projectRoot.$config['content_template_file'],
            routesDir: $projectRoot.$config['routes_dir'],
            contentDir: $projectRoot.$config['content_dir'],
            staticDir: $projectRoot.$config['static_dir'],
            outDir: $projectRoot.$config['out_dir'],
            siteTitle: $config['site_title'],
            baseUrl: $config['base_url']
        );
    }
}