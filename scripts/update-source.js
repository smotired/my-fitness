// Updates source.json (sidestore manifest)
//
// Inputs:
//   FULL_VERSION  e.g. "1.0.0.42"
//   TAG           e.g. "v1.0.0.42"   (matches the GitHub Release tag)
//   DATE          e.g. "2026-09-03"
//   IPA_NAME      e.g. "App-1.0.0.42.ipa"
//   IPA_SIZE      file size in bytes
//   REPO          "owner/repo", provided automatically by GitHub Actions

import { existsSync, readFileSync, writeFileSync } from 'fs';

const appId = "dev.whatinthesamhill.myfitness";
const appName = "My Fitness";

const { FULL_VERSION, TAG, DATE, IPA_NAME, IPA_SIZE, REPO } = process.env;

const downloadURL = `https://github.com/${REPO}/releases/download/${TAG}/${IPA_NAME}`;
const iconURL = `https://raw.githubusercontent.com/${REPO}/main/resources/icon-only.png`;

const sourcePath = 'source.json';

let source;
if (existsSync(sourcePath)) {
    source = JSON.parse(readFileSync(sourcePath, 'utf8'));
} else {
    source = {
        name: 'Personal Source',
        identifier: `${appId}.source`,
        apps: [],
    };
}

let app = source.apps.find((a) => a.bundleIdentifier === appId);

const versionEntry = {
    version: FULL_VERSION,
    date: DATE,
    downloadURL,
    size: Number(IPA_SIZE),
    localizedDescription: `Build ${FULL_VERSION}`,
};

if (!app) {
    app = {
        name: appName,
        bundleIdentifier: appId,
        developerName: 'Sam Hill',
        localizedDescription: `${appName}. PERSONAL BUILD. NOT FOR DISTRIBUTION.`,
        iconURL,
        version: FULL_VERSION,
        versionDate: DATE,
        downloadURL,
        size: Number(IPA_SIZE),
        versions: [versionEntry],
    };
    source.apps.push(app);
} else {
    app.version = FULL_VERSION;
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