import { useQuery } from "@tanstack/react-query";
import ModAPI from "@/mod/data/mod-api";

export default function useModsFiles() {
  const modAPI = new ModAPI();

  const query = useQuery({
    queryKey: ["mods-files"],
    queryFn: modAPI.getModsFiles,
  });

  return query.data ?? [];
}
