const path = require("path");
const coreUtils = require("./coreUtils");
const configs = require("./configs");

describe("coreUtils.parseRawImportLines", () => {
  const fileNameSample1 =
    "/git/sqlui-native/commons/adapters/RedisDataAdapter.ts";
  const importSample1 = [
    "import { createClient, RedisClientType } from 'redis';",
    "import { SqluiCore } from '../../typings';",
    "import IDataAdapter from './IDataAdapter';",
    "import BaseDataAdapter from './BaseDataAdapter';",
    "import { Express } from 'express';",
  ];

  const fileNameSample2 = "/git/sqlui-native/src/App.tsx";
  const importSample2 = [
    `import { createTheme } from '@mui/material/styles';`,
    `import { ThemeProvider } from '@mui/material/styles';`,
    `import Alert from '@mui/material/Alert';`,
    `import Box from '@mui/material/Box';`,
    `import CircularProgress from '@mui/material/CircularProgress';`,
    `import { HashRouter } from 'react-router-dom';`,
    `import { Route } from 'react-router-dom';`,
    `import { Routes } from 'react-router-dom';`,
    `import { useEffect } from 'react';`,
    `import { useState } from 'react';`,
    `import { getDefaultSessionId } from 'src/data/session';`,
    `import { setCurrentSessionId } from 'src/data/session';`,
    `import { useDarkModeSetting } from 'src/hooks';`,
    `import { useGetCurrentSession } from 'src/hooks';`,
    `import { useGetSessions } from 'src/hooks';`,
    `import { useUpsertSession } from 'src/hooks';`,
    `import ActionDialogs from 'src/components/ActionDialogs';`,
    `import AppHeader from 'src/components/AppHeader';`,
    `import EditConnectionPage from 'src/views/EditConnectionPage';`,
    `import ElectronEventListener from 'src/components/ElectronEventListener';`,
    `import MainPage from 'src/views/MainPage';`,
    `import MissionControl from 'src/components/MissionControl';`,
    `import NewConnectionPage from 'src/views/NewConnectionPage';`,
    `import Toasters from 'src/components/Toasters';`,
  ];

  test("importSample1 example with transform relative", async () => {
    let libToModules = {};
    let moduleToLibs = {};
    let allImportedModules = new Set();

    configs.transformRelativeImport = "";

    const actual = coreUtils.parseRawImportLines(
      fileNameSample1,
      importSample1,
      libToModules,
      moduleToLibs,
      allImportedModules
    );

    expect(libToModules).toMatchSnapshot();
    expect(moduleToLibs).toMatchSnapshot();
    expect(allImportedModules).toMatchSnapshot();
  });

  test("importSample1 example with transform relative 'src'", async () => {
    let libToModules = {};
    let moduleToLibs = {};
    let allImportedModules = new Set();

    configs.transformRelativeImport = "src/";

    const actual = coreUtils.parseRawImportLines(
      fileNameSample1,
      importSample1,
      libToModules,
      moduleToLibs,
      allImportedModules
    );

    expect(libToModules).toMatchSnapshot();
    expect(moduleToLibs).toMatchSnapshot();
    expect(allImportedModules).toMatchSnapshot();
  });

  test("importSample1 example with no transformation", async () => {
    let libToModules = {};
    let moduleToLibs = {};
    let allImportedModules = new Set();

    configs.transformRelativeImport = undefined;

    const actual = coreUtils.parseRawImportLines(
      fileNameSample1,
      importSample1,
      libToModules,
      moduleToLibs,
      allImportedModules
    );

    expect(libToModules).toMatchSnapshot();
    expect(moduleToLibs).toMatchSnapshot();
    expect(allImportedModules).toMatchSnapshot();
  });

  test("importSample2 example with transform relative", async () => {
    let libToModules = {};
    let moduleToLibs = {};
    let allImportedModules = new Set();

    configs.transformRelativeImport = "";

    const actual = coreUtils.parseRawImportLines(
      fileNameSample2,
      importSample2,
      libToModules,
      moduleToLibs,
      allImportedModules
    );

    expect(libToModules).toMatchSnapshot();
    expect(moduleToLibs).toMatchSnapshot();
    expect(allImportedModules).toMatchSnapshot();
  });

  test("importSample2 example with no transformation", async () => {
    let libToModules = {};
    let moduleToLibs = {};
    let allImportedModules = new Set();

    configs.transformRelativeImport = undefined;

    const actual = coreUtils.parseRawImportLines(
      fileNameSample2,
      importSample2,
      libToModules,
      moduleToLibs,
      allImportedModules
    );

    expect(libToModules).toMatchSnapshot();
    expect(moduleToLibs).toMatchSnapshot();
    expect(allImportedModules).toMatchSnapshot();
  });
});