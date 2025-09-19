export default {
    stories: ["../src/**/__tests__/*.stories.tsx"],
    typescript: {
        check: false,
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            propFilter: () => true,
        },
    },
    addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],

    framework: {
        name: "@storybook/react-vite",
        options: {
            builder: {
                viteConfigPath: "./.storybook/vite.config.mjs",
            },
        },
    },

    docs: {
        defaultName: "Documentation",
        autodocs: "tag",
    },

    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
    },
};
