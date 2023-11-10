const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

exports.generate = async () => {
  const feed = new RSS({
    title: "Manish Tiwari",
    description: "Hey! I am Manish, a full-stack developer from India",
    feed_url: "",
    site_url: "",
    managingEditor: "Manish Tiwari",
    webMaster: "Manish Tiwari",
    language: "en",
    copyright: `Manish Tiwari | ${new Date().getFullYear()}`,
  });

};
