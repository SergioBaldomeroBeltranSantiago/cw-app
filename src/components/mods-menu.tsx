"use client";
// import useModsFiles from "@/mod/hooks/use-mods-files";
import useMods from "@/mod/hooks/use-mods";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

type ModCard = {
  name: string;
  icon: string;
  version: string;
  link: string;
  categories: readonly string[];
  version1dot21?: number;
  loaderNeoForge?: number;
  loaderFabric?: number;
};

export default function ModsMenu() {
  // const modsFiles = useModsFiles();

  const modFiles = useMods();
  const searchParams = useSearchParams();
  const category = searchParams.get("category")?.toLowerCase() ?? "";

  const mods = useMemo(
    () =>
      category
        ? modFiles.filter((mod: ModCard) =>
            mod.categories.some((categoryString: string) =>
              categoryString.toLowerCase().includes(category),
            ),
          )
        : modFiles,
    [category, modFiles],
  );

  return (
    <div className="p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {/*{modsFiles.map((modFile) => (
          <ModsMenuItem name={modFile.file} key={modFile.file} />
        ))}*/}
        {mods.map((mod: ModCard) => (
          <ModsMenuItem key={mod.name} modCard={mod} />
        ))}
      </ul>
    </div>
  );
}

/*
function ModsMenuItem({ name }: { name: string }) {
  return (
    <li className="border-2 rounded-sm flex items-center justify-center text-gray-400 p-2 border-gray-400 overflow-clip">
      {name}
    </li>
  );
}
  */

function ModsMenuItem({ modCard }: { modCard: ModCard }) {
  const { name, icon, version, link } = modCard;
  return (
    <li className="border-2 rounded-sm flex flex-col items-center justify-center text-gray-400 p-2 border-gray-400 overflow-clip">
      <div className="size-16 relative">
        <Image src={icon} alt="mod icon missing" fill />
      </div>
      <span>{name}</span>
      <span>{version}</span>
      <a href={link} target="_blank" className="text-blue-500 underline">
        Ir al mod
      </a>
    </li>
  );
}
