"use client";

import useModsFiles from "@/mod/hooks/use-mods-files";

export default function ModsMenu() {
  const modsFiles = useModsFiles();

  return (
    <div className="p-4">
      <ul className="grid grid-cols-4 gap-4">
        {modsFiles.map((modFile) => (
          <ModsMenuItem name={modFile.file} key={modFile.file} />
        ))}
      </ul>
    </div>
  );
}

function ModsMenuItem({ name }: { name: string }) {
  return (
    <li className="border-2 rounded-sm flex items-center justify-center text-gray-400 p-2 border-gray-400 overflow-clip">
      {name}
    </li>
  );
}
