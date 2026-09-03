// Updates source.json (sidestore manifest)
//
// Inputs:
//   PKG_VERSION   e.g. "1.0.0"
//   BUILD_NUMBER  e.g. "42"
//   TAG           e.g. "v1.0.0.42"   (matches the GitHub Release tag)
//   DATE          e.g. "2026-09-03"
//   IPA_NAME      e.g. "App-1.0.0.ipa"
//   IPA_SIZE      file size in bytes
//   REPO          "owner/repo", provided automatically by GitHub Actions

import { existsSync, readFileSync, writeFileSync } from 'fs';

const appId = "dev.whatinthesamhill.myfitness";
const appName = "My Fitness";

const { PKG_VERSION, TAG, DATE, IPA_NAME, IPA_SIZE, REPO, BUILD_NUMBER } = process.env;

const downloadURL = `https://github.com/${REPO}/releases/download/${TAG}/${IPA_NAME}`;
const iconURL = `https://raw.githubusercontent.com/${REPO}/main/resources/icon-only.png`;

const sourcePath = 'source.json';

let source;
if (existsSync(sourcePath)) {
    source = JSON.parse(readFileSync(sourcePath, 'utf8'));
} else {
    source = {
        name: 'Sam Hill',
        identifier: `${appId}.source`,
        apps: [],
    };
}

let app = source.apps.find((a) => a.bundleIdentifier === appId);

const versionEntry = {
    version: PKG_VERSION,
    date: DATE,
    downloadURL,
    size: Number(IPA_SIZE),
    localizedDescription: `Build ${BUILD_NUMBER}`,
};

if (!app) {
    app = {
        name: appName,
        bundleIdentifier: appId,
        developerName: 'Sam Hill',
        localizedDescription: `${appName}. PERSONAL BUILD. NOT FOR DISTRIBUTION.`,
        iconURL,
        version: PKG_VERSION,
        versionDate: DATE,
        downloadURL,
        size: Number(IPA_SIZE),
        versions: [versionEntry],
    };
    source.apps.push(app);
} else {
    app.version = PKG_VERSION;
    app.versionDate = DATE;
    app.downloadURL = downloadURL;
    app.size = Number(IPA_SIZE);
    app.iconURL = iconURL;
    app.versions = app.versions || [];
    app.versions.unshift(versionEntry);
    // trim history to last 10 versions to cap manifest size
    app.versions = app.versions.slice(0, 10);
}

writeFileSync(sourcePath, JSON.stringify(source, null, 2));
console.log('source.json updated:\n', JSON.stringify(app, null, 2));