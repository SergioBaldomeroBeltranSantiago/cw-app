"use client";

import useModsFiles from "@/mod/hooks/use-mods-files";

export default function ModsMenu() {
  const modsFiles = useModsFiles();

  return (
    <div>
      <ul>
        {modsFiles.map((modFile) => (
          <li key={modFile.file}>{modFile.file}</li>
        ))}
      </ul>
    </div>
  );
}
