export default {
    name: "settings",
    type: "document",
    title: "Settings",
    fields: [
        {
            name: "siteTitle",
            title: "Titel Seite",
            type: "string",
        },
        {
            name: "siteDescription",
            title: "Site Description",
            type: "string",
        },
        {
            name: "siteKeywords",
            title: "Keywords",
            type: "string",
        },

        {
            name: "Logo",
            title: "Logo",
            type: "image",
        },
        {
            name: "landingImage",
            title: "Landing Image",
            type: "image",
        },
    ],
    initialValue: {},
};
