const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    core: {
        builder: "webpack5"
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@api": path.resolve(__dirname, "../src/api"),
            "@pages": path.resolve(__dirname, "../src/pages"),
            "@utils": path.resolve(__dirname, "../src/utils"),
            "@styles": path.resolve(__dirname, "../src/styles"),
            "@repo": path.resolve(__dirname, "../src/repositories"),
            "@templates": path.resolve(__dirname, "../src/templates"),
            "@images": path.resolve(__dirname, "../src/assets/images"),
            "@components": path.resolve(__dirname, "../src/components")
        };
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../")
        });

        return config;
    }
};
