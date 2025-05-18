"use client";

import useModsFiles from "@/mod/hooks/use-mods-files";

export default function ModsMenu() {
  const modsFiles = useModsFiles();

  return (
    <div className="p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {/*Ejemplo de lo que estoy buscando*/}
        <li className="border-2 rounded-sm flex flex-col items-center justify-center text-gray-400 p-2 border-gray-400 overflow-clip">
          <img
            src="https://media.forgecdn.net/avatars/thumbnails/922/589/64/64/638388110702981994.png"
            alt="mod icon"
            className="w-16 h-16"
          />
          <span>Create: Resource Geodes</span>
          <span>Version 1.20.1-0.1.0</span>
          <a
            href="https://www.curseforge.com/minecraft/mc-mods/create-resource-geodes/files/5272079"
            target="_blank"
            className="text-blue-500 underline"
          >
            Ir al mod
          </a>
        </li>
        {/*Aqui se acaba el ejemplo*/}

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
