import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selecDirectorySection = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
